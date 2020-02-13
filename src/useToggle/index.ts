/**
 * References:
 * https://github.com/streamich/react-use/blob/master/src/useToggle.ts
 * https://github.com/beizhedenglong/react-hooks-lib/blob/master/src/hooks/useToggle.js
 */

import { useState, useCallback } from 'react';
import { InitialState } from '../../types/common';
import useCurryFunction from '../useCurryFunction';

const useToggle = (initialValue: InitialState<boolean> = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(
    (nextValue?: boolean) =>
      setValue(prevValue =>
        typeof nextValue === 'boolean' ? nextValue : !prevValue,
      ),
    [],
  );
  const setTrue = useCurryFunction(setValue, null, true);
  const setFalse = useCurryFunction(setValue, null, false);

  return [value, toggle, setTrue, setFalse] as const;
};

export default useToggle;
