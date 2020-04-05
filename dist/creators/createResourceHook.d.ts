import { AsyncState } from '../types/common';
declare const createResourceHook: <TAttrs extends Partial<HTMLElement>>(tagName: "script" | "link", isValid: (attrs: TAttrs) => boolean, insert: (element: HTMLElement) => void) => (attrs: TAttrs, initialState?: import("../types/common").ValueOrFunction<AsyncState<unknown, unknown>>) => AsyncState<unknown, unknown>;
export default createResourceHook;
