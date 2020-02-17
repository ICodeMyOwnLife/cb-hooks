import { useCallback } from 'react';
import { CheckedTargetEvent } from '../types/common';

const useHandleChangeCheck = (
  ...handlers: readonly ((checked: boolean) => void | undefined)[]
) =>
  useCallback(
    ({ target: { checked } }: CheckedTargetEvent) =>
      handlers.forEach(handler => handler?.(Boolean(checked))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handlers,
  );

export default useHandleChangeCheck;
