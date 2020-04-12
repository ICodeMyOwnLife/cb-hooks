/**
 * References:
 * https://github.com/withvoid/melting-pot/blob/master/src/hooks/useTitle.js
 * https://github.com/streamich/react-use/blob/master/src/useTitle.ts
 */

import { useRef, useEffect } from 'react';
import useWillUnmount from './useWillUnmount';

const useTitle = (title: string, options?: UseTitleOptions) => {
  const titleRef = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useWillUnmount(() => {
    if (options?.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
};

export default useTitle;

export interface UseTitleOptions {
  restoreOnUnmount?: boolean;
}
