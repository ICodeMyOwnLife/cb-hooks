import { FilesTargetEvent } from 'cb-toolset/dom';
declare const useHandleChangeFile: (...handlers: readonly ((files: FileList | null) => void | undefined)[]) => ({ target: { files } }: FilesTargetEvent) => void;
export default useHandleChangeFile;
