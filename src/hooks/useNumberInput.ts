import { useState } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useHandleChangeNumber from './useHandleChangeNumber';

const useNumberInput = (initialValue: ValueFactory<number> = 0) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeNumber(setValue);
  return [value, setValue, handleChange] as const;
};

export default useNumberInput;
