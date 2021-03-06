import { useCallback } from 'react';
import { ValueTargetEvent } from 'cb-toolset/dom';

const useHandleChangeText = (
  ...handlers: readonly ((text: string) => void | undefined)[]
) =>
  useCallback(
    ({ target: { value } }: ValueTargetEvent<string>) =>
      handlers.forEach(handler => handler?.(String(value))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handlers,
  );

export default useHandleChangeText;
