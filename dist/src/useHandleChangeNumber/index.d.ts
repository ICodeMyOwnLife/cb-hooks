import { ValueTargetEvent } from '../types/common';
declare const useHandleChangeNumber: (...handlers: readonly ((value: number) => void | undefined)[]) => ({ target: { value } }: ValueTargetEvent<string>) => void;
export default useHandleChangeNumber;
