import { useRef, useCallback, useState, useEffect } from 'react';

const useScrollSpy = () => {
  const [id, setId] = useState<string>();
  const elementMapRef = useRef(new Map<Element, string>());
  const intersectingElementsRef = useRef(new Set<Element>());

  const register = useCallback((arg: string | Element) => {
    if (typeof arg === 'string') {
      const elementId = arg;

      return (element: Element) => {
        elementMapRef.current.set(element, elementId);
      };
    }

    if (arg instanceof Element) {
      const element = arg;
      const elementId = arg.getAttribute('id');

      if (elementId) {
        elementMapRef.current.set(element, elementId);
      }
    }

    return undefined;
  }, []) as ScrollSpyRegister;

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(({ isIntersecting, target }) => {
          if (isIntersecting) {
            intersectingElementsRef.current.add(target);
          } else {
            intersectingElementsRef.current.delete(target);
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
          elementMapRef.current.get(selectedElement) ||
          selectedElement?.getAttribute('id');

        if (typeof newId === 'string') {
          setId(newId);
        }
      },
      { threshold: 1 },
    );

    elementMapRef.current.forEach((_, element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return [id, register] as const;
};

export default useScrollSpy;

export interface ScrollSpyRegister {
  (element: Element): void;
  (id: string): (element: Element) => void;
}
