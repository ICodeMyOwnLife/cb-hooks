import { HTMLAttributes } from 'react';
import { AsyncState } from '../types/common';
declare const createResourceHook: <TAttrs extends HTMLAttributes<HTMLElement>>(tagName: "script" | "link", isValid: (attrs: TAttrs) => boolean) => (attrs: TAttrs, initialState?: import("../types/common").ValueOrFunction<AsyncState<unknown, unknown>>) => AsyncState<unknown, unknown>;
export default createResourceHook;
