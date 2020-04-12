import { CheckedTargetEvent } from '../types/common';
declare const useHandleChangeCheck: (...handlers: readonly ((checked: boolean) => void | undefined)[]) => ({ target: { checked } }: CheckedTargetEvent) => void;
export default useHandleChangeCheck;
