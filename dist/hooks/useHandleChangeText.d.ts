import { ValueTargetEvent } from 'cb-toolset/dom';
declare const useHandleChangeText: (...handlers: readonly ((text: string) => void | undefined)[]) => ({ target: { value } }: ValueTargetEvent<string>) => void;
export default useHandleChangeText;
