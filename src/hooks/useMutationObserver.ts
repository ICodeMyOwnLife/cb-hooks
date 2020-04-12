/**
 * References:
 * https://github.com/imbhargav5/rooks/blob/dev/packages/shared/useMutationObserver.ts
 * https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 */

import { useLayoutEffect, RefObject } from 'react';
import useUpdatedRef from './useUpdatedRef';

const useMutationObserver = <TNode extends Node>(
  nodeRef: RefObject<TNode>,
  callback: MutationCallback,
  options?: MutationObserverInit,
) => {
  const callbackRef = useUpdatedRef(callback);

  useLayoutEffect(() => {
    if (!nodeRef.current) return undefined;

    const observer = new MutationObserver((mutation, currentObserver) =>
      callbackRef.current?.(mutation, currentObserver),
    );
    observer.observe(nodeRef.current, options);

    return () => observer.disconnect();
  }, [callbackRef, nodeRef, options]);
};

export default useMutationObserver;
