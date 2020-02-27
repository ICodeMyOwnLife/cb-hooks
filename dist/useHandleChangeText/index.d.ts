import { ValueTargetEvent } from '../types/common';
declare const useHandleChangeText: (...handlers: readonly ((text: string) => void | undefined)[]) => ({ target: { value } }: ValueTargetEvent<string>) => void;
export default useHandleChangeText;
