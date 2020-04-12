/**
 * References:
 * https://github.com/streamich/react-use/blob/c0574064ca/src/useFavicon.ts
 */

import { useEffect, DependencyList } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useUpdatedLink = (
  attrs: Partial<HTMLLinkElement>,
  selector: string | (() => HTMLLinkElement),
  deps: DependencyList = [],
) => {
  const selectorRef = useUpdatedRef(selector);

  useEffect(() => {
    const linkSelector = selectorRef.current;
    const link =
      (typeof linkSelector === 'function'
        ? linkSelector()
        : document.querySelector(linkSelector)) ||
      document.createElement('link');

    if (link instanceof HTMLLinkElement) {
      Object.assign(link, attrs);
      document.head.appendChild(link);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdatedLink;
