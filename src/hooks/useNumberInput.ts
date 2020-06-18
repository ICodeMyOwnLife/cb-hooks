import { useState, Dispatch, SetStateAction } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import { EventHandler, ValueTargetEvent } from 'cb-toolset/dom';
import useHandleChangeNumber from './useHandleChangeNumber';

const useNumberInput = (
  initialValue: ValueFactory<number> = 0,
): readonly [
  number,
  Dispatch<SetStateAction<number>>,
  EventHandler<ValueTargetEvent<string>>,
] => {
  const [value, setValue] = useState(initialValue);
  const handleChange = useHandleChangeNumber(setValue);
  return [value, setValue, handleChange];
};

export default useNumberInput;
