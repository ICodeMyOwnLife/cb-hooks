import { DependencyList, useRef, useEffect } from 'react';

const useUpdatedRef = <TValue>(value: TValue, deps?: DependencyList) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export default useUpdatedRef;
