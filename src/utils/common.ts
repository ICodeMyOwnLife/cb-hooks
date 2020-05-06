import { BaseSyntheticEvent } from 'react';
import { isBrowser } from 'cb-toolset/dom';

export const isSyntheticEvent = (o: any): o is BaseSyntheticEvent =>
  o instanceof Object && o.nativeEvent instanceof Event;

export const getWindowScrollOffset = (): Offset =>
  isBrowser() ? { x: window.scrollX, y: window.scrollY } : {};

export const getWindowSize = (): WindowSize =>
  isBrowser()
    ? {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      }
    : {};

export const persistEvent = (o: unknown) => isSyntheticEvent(o) && o.persist();

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
