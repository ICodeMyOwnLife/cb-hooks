/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useToggle.ts
 * https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useToggle.js
 */

import { useState, useCallback } from 'react';
import useCurryFunction from './useCurryFunction';
import { InitialState } from '../types/common';

const useToggle = (initialValue: InitialState<boolean> = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue(prevValue => !prevValue), []);
  const setTrue = useCurryFunction(setValue, null, true);
  const setFalse = useCurryFunction(setValue, null, false);
  return [value, toggle, setTrue, setFalse, setValue] as const;
};

export default useToggle;
