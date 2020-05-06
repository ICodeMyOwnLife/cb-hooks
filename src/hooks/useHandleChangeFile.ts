import { useCallback } from 'react';
import { FilesTargetEvent } from 'cb-toolset/dom';

const useHandleChangeFile = (
  ...handlers: readonly ((files: FileList | null) => void | undefined)[]
) =>
  useCallback(
    ({ target: { files } }: FilesTargetEvent) =>
      handlers.forEach(handler => handler?.(files)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    handlers,
  );

export default useHandleChangeFile;
