import { useRef, useCallback, useState } from 'react';
import useIntersectionObserverEffect, {
  UseIntersectionObserverEffectOptions,
} from './useIntersectionObserverEffect';

const defaultGetId = <TElement extends Element>(element: TElement) =>
  element?.getAttribute('id');

const isElement = <TElement extends Element>(o: unknown): o is TElement =>
  o instanceof Element;

const useScrollSpy = <TElement extends Element = Element>({
  getId = defaultGetId,
  threshold = 1,
  ...rest
}: UseScrollSpyOptions<TElement> = {}) => {
  const [id, setId] = useState<string>();
  const elementMapRef = useRef(new Map<TElement, string>());
  const intersectingElementsRef = useRef(new Set<TElement>());

  const register = useCallback(
    (arg: string | TElement) => {
      if (typeof arg === 'string') {
        const elementId = arg;

        return (element: TElement) => {
          elementMapRef.current.set(element, elementId);
        };
      }

      if (isElement<TElement>(arg)) {
        const element = arg;
        const elementId = getId(element);

        if (elementId) {
          elementMapRef.current.set(element, elementId);
        }
      }

      return undefined;
    },
    [getId],
  ) as UseScrollSpyRegister<TElement>;

  useIntersectionObserverEffect(
    () => Array.from(elementMapRef.current.keys()),
    entries => {
      entries.forEach(({ intersectionRatio, target }) => {
        if (intersectionRatio >= threshold) {
          intersectingElementsRef.current.add(target as TElement);
        } else {
          intersectingElementsRef.current.delete(target as TElement);
        }
      });

      if (!intersectingElementsRef.current.size) return;

      const selectedElement = Array.from(
        intersectingElementsRef.current,
      ).reduce((prev, curr) =>
        prev.getBoundingClientRect().top < curr.getBoundingClientRect().top
          ? prev
          : curr,
      );

      const newId =
        elementMapRef.current.get(selectedElement) || getId(selectedElement);

      if (typeof newId === 'string') {
        setId(newId);
      }
    },
    { ...rest, threshold },
  );

  return [id, register] as const;
};

export default useScrollSpy;

export interface UseScrollSpyOptions<TElement>
  extends UseIntersectionObserverEffectOptions {
  getId?: (element: TElement) => string | null | undefined;
  threshold?: number;
}

export interface UseScrollSpyRegister<TElement extends Element> {
  (element: TElement): void;
  (id: string): (element: TElement) => void;
}
