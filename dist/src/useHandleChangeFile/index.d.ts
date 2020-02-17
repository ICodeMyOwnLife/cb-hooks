import { FilesTargetEvent } from '../types/common';
declare const useHandleChangeFile: (...handlers: readonly ((files: FileList | null) => void | undefined)[]) => ({ target: { files } }: FilesTargetEvent) => void;
export default useHandleChangeFile;
