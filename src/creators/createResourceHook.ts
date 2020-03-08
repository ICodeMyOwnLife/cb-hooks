/**
 * References:
 * https://github.com/hupe1980/react-script-hook/blob/master/src/use-script.tsx
 */

import { useState, useEffect } from 'react';
import useIsMounted from '../useIsMounted';
import { InitialState, AsyncState } from '../types/common';
import { PENDING_STATE, LOADING_STATE } from '../constants/common';

const createResourceHook = <TAttrs extends Partial<HTMLElement>>(
  tagName: 'script' | 'link',
  isValid: (attrs: TAttrs) => boolean,
) => (
  attrs: TAttrs,
  initialState: InitialState<AsyncState> = PENDING_STATE,
) => {
  const isMounted = useIsMounted();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!isValid(attrs)) {
      setState(PENDING_STATE);
      return undefined;
    }

    const element = ((attrs.id &&
      document.querySelector(`${tagName}#${attrs.id}`)) ||
      document.createElement(tagName)) as HTMLScriptElement;

    Object.assign(element, attrs);

    const handleLoad = () => {
      if (isMounted()) {
        setState(PENDING_STATE);
      }
    };

    const handleError = (e: ErrorEvent) => {
      if (isMounted()) {
        setState({ loading: false, error: e.error });
      }
    };

    element.addEventListener('load', handleLoad, false);
    element.addEventListener('error', handleError, false);

    setState(LOADING_STATE);
    document.body.appendChild(element);

    return () => {
      element.removeEventListener('load', handleLoad, false);
      element.removeEventListener('error', handleError, false);
    };
  }, [attrs, isMounted]);

  return state;
};

export default createResourceHook;
