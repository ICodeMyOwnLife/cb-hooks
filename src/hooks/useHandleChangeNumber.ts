import { useCallback } from 'react';
import { ValueTargetEvent } from 'cb-toolset/dom';

const useHandleChangeNumber = (
  ...handlers: readonly ((value: number) => void | undefined)[]
) =>
  useCallback(
    ({ target: { value } }: ValueTargetEvent<string>) =>
      handlers.forEach(handler => handler?.(Number(value))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handlers,
  );

export default useHandleChangeNumber;
