/**
 * References:
 * https://github.com/hupe1980/react-script-hook/blob/master/src/use-script.tsx
 */

import { useState, useEffect } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useUpdatedRef from '../hooks/useUpdatedRef';
import useIsMounted from '../hooks/useIsMounted';
import { PENDING_STATE, LOADING_STATE } from '../constants/common';
import { AsyncState } from '../types/common';

const createResourceHook = <TAttrs extends Partial<HTMLElement>>(
  tagName: 'script' | 'link',
  isValid: (attrs: TAttrs) => boolean,
  insert: (element: HTMLElement) => void,
) => (
  attrs: TAttrs,
  onLoad?: (e: Event, isMounted: boolean) => void,
  onError?: (e: ErrorEvent, isMounted: boolean) => void,
  initialState: ValueFactory<AsyncState> = PENDING_STATE,
) => {
  const [state, setState] = useState(initialState);
  const onLoadRef = useUpdatedRef(onLoad);
  const onErrorRef = useUpdatedRef(onError);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (!isValid(attrs)) {
      setState(PENDING_STATE);
      return;
    }

    const element = ((attrs.id &&
      document.querySelector(`${tagName}#${attrs.id}`)) ||
      document.createElement(tagName)) as HTMLScriptElement;

    Object.assign(element, attrs);

    const handleLoad = (e: Event) => {
      if (isMounted()) setState(PENDING_STATE);
      onLoadRef.current?.(e, isMounted());
    };

    const handleError = (e: ErrorEvent) => {
      if (isMounted()) setState({ loading: false, error: e.error });
      onErrorRef.current?.(e, isMounted());
    };

    element.addEventListener('load', handleLoad);
    element.addEventListener('error', handleError);

    setState(LOADING_STATE);
    insert(element);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};

export default createResourceHook;
