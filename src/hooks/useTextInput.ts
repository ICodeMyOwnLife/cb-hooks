import { useState } from 'react';
import useHandleChangeText from './useHandleChangeText';
import { InitialState } from '../types/common';

const useTextInput = (initialValue: InitialState<string> = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeText(setValue);
  return [value, setValue, handleChange] as const;
};

export default useTextInput;
