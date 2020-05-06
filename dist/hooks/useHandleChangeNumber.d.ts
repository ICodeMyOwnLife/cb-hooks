import { ValueTargetEvent } from 'cb-toolset/dom';
declare const useHandleChangeNumber: (...handlers: readonly ((value: number) => void | undefined)[]) => ({ target: { value } }: ValueTargetEvent<string>) => void;
export default useHandleChangeNumber;
