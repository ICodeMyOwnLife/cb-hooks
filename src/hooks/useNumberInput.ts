import { useState } from 'react';
import useHandleChangeNumber from './useHandleChangeNumber';
import { InitialState } from '../types/common';

const useNumberInput = (initialValue: InitialState<number> = 0) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeNumber(setValue);
  return [value, setValue, handleChange] as const;
};

export default useNumberInput;
