import { useState, Dispatch, SetStateAction } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { EventHandler, ValueTargetEvent } from 'cb-toolset/dom';
import useHandleChangeText from './useHandleChangeText';

const useTextInput = (
  initialValue: ValueFactory<string> = '',
): readonly [
  string,
  Dispatch<SetStateAction<string>>,
  EventHandler<ValueTargetEvent<string>>,
] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeText(setValue);
  return [value, setValue, handleChange];
};

export default useTextInput;
