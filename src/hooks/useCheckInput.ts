import { useState, Dispatch, SetStateAction } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { EventHandler, CheckedTargetEvent } from 'cb-toolset/dom';
import useHandleChangeCheck from './useHandleChangeCheck';

const useCheckInput = (
  initialValue: ValueFactory<boolean> = false,
): readonly [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  EventHandler<CheckedTargetEvent>,
] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeCheck(setValue);
  return [value, setValue, handleChange];
};

export default useCheckInput;
