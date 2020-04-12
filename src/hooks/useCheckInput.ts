import { useState } from 'react';
import useHandleChangeCheck from './useHandleChangeCheck';
import { InitialState } from '../types/common';

const useCheckInput = (initialValue: InitialState<boolean> = false) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeCheck(setValue);
  return [value, setValue, handleChange] as const;
};

export default useCheckInput;
