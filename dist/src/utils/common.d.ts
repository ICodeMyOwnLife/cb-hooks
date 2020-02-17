import { BaseSyntheticEvent } from 'react';
export declare const createUniqueObject: () => {};
export declare const isBrowser: () => boolean;
export declare const isSyntheticEvent: (o: any) => o is BaseSyntheticEvent<object, any, any>;
export declare const getWindowScrollOffset: () => Offset;
export declare const getWindowSize: () => WindowSize;
export declare const persistEvent: (o: unknown) => false | void;
export interface Offset {
    x?: number;
    y?: number;
}
export interface WindowSize {
    innerWidth?: number;
    innerHeight?: number;
    outerWidth?: number;
    outerHeight?: number;
}
