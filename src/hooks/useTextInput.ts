import { useState } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useHandleChangeText from './useHandleChangeText';

const useTextInput = (initialValue: ValueFactory<string> = '') => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeText(setValue);
  return [value, setValue, handleChange] as const;
};

export default useTextInput;
