/**
 * References:
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * https://github.com/Andarist/use-previous
 * https://github.com/dispix/react-pirate
 * https://github.com/imbhargav5/rooks/tree/dev/packages/previous
 * https://github.com/kitze/react-hanger
 * https://github.com/zakariaharti/react-hookedup
 * https://github.com/imbhargav5/rooks/blob/dev/packages/previous/src/usePrevious.ts
 */

import { useRef, useEffect } from 'react';

const usePrevious = <TValue>(value: TValue) => {
  const prevRef = useRef<TValue>();

  useEffect(() => {
    prevRef.current = value;
  });

  return prevRef.current;
};

export default usePrevious;
