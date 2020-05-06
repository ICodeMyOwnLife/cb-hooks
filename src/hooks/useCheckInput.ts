import { useState } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useHandleChangeCheck from './useHandleChangeCheck';

const useCheckInput = (initialValue: ValueFactory<boolean> = false) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeCheck(setValue);
  return [value, setValue, handleChange] as const;
};

export default useCheckInput;
