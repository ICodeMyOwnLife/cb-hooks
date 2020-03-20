import { useRef, useCallback, useLayoutEffect, useState } from 'react';

const useScrollSpy = () => {
  const [id, setId] = useState<string>();
  const elementMapRef = useRef(new Map<Element, string>());

  const register = useCallback((arg: string | Element) => {
    if (typeof arg === 'string') {
      const elementId = arg;
      return (element: Element) => {
        elementMapRef.current.set(element, elementId);
      };
    }
    const element = arg;
    const elementId = arg.getAttribute('id');
    if (elementId) {
      elementMapRef.current.set(element, elementId);
    }
    return undefined;
  }, []);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersectingEntries = entries.filter(
          ({ isIntersecting }) => isIntersecting,
        );

        if (!intersectingEntries.length) return;

        const { target } = intersectingEntries[0];
        const newId =
          elementMapRef.current.get(target) ?? target.getAttribute('id');

        if (typeof newId === 'string') {
          setId(newId);
        }
      },
      { threshold: 1 },
    );

    elementMapRef.current.forEach((_, element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return [id, register] as [string, ScrollSpyRegister];
};

export default useScrollSpy;

export interface ScrollSpyRegister {
  (element: Element): void;
  (id: string): (element: Element) => void;
}
