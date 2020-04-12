import { useRef } from 'react';
import { InitialState } from '../types/common';

const useCurrent = <TValue>(initialValue?: InitialState<TValue>) => {
  const ref = useRef(initialValue);

  return {
    set: (value: TValue) => {
      ref.current = value;
    },
    get: () => ref.current,
    is: (value: TValue) => ref.current === value,
  } as const;
};

export default useCurrent;
