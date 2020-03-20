import { useRef, useCallback, useLayoutEffect, useState } from 'react';

const useScrollSpy = () => {
  const [scrollId, setScrollId] = useState<string>();
  const elementMapRef = useRef(new Map<Element, string>());

  const register = useCallback(
    (id: string) => (element: Element) => {
      elementMapRef.current.set(element, id);
    },
    [],
  );

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const topEntry = entries
        .filter(
          ({ intersectionRatio, target }) =>
            intersectionRatio === 1 && elementMapRef.current.has(target),
        )
        .reduce((prev, curr) =>
          prev.boundingClientRect.top < curr.boundingClientRect.top
            ? prev
            : curr,
        );

      setScrollId(elementMapRef.current.get(topEntry.target)!);
    });

    elementMapRef.current.forEach((_, element) => observer.observe(element));
  }, []);

  return [scrollId, register] as const;
};

export default useScrollSpy;
