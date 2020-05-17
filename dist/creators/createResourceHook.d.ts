import { ValueFactory } from 'cb-toolset/function';
import { AsyncState } from '../types/common';
declare const createResourceHook: <TAttrs extends Partial<HTMLElement>>(tagName: "script" | "link", isValid: (attrs: TAttrs) => boolean, insert: (element: HTMLElement) => void) => (attrs: TAttrs, onLoad?: ((e: Event) => void) | undefined, onError?: ((e: ErrorEvent) => void) | undefined, initialState?: ValueFactory<AsyncState<unknown, unknown>>) => AsyncState<unknown, unknown>;
export default createResourceHook;
