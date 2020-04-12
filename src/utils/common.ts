import { BaseSyntheticEvent } from 'react';
import { PickFrom } from '../types/common';

export const createUniqueObject = () => ({});

export const isBrowser = () =>
  typeof window !== 'undefined' && typeof window.document !== 'undefined';

export const isSyntheticEvent = (o: any): o is BaseSyntheticEvent =>
  o instanceof Object && o.nativeEvent instanceof Event;

export const getSearchParamsObject = <TSearchObject>(
  ...init: ConstructorParameters<typeof URLSearchParams>
) => {
  const urlSearchParams = new URLSearchParams(...init);
  return Object.fromEntries(
    (urlSearchParams as unknown) as Iterable<readonly string[]>,
  ) as TSearchObject;
};

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

export const pickFrom = <TObject extends object, TKeys extends keyof TObject>(
  o: TObject,
  ...keys: TKeys[]
) =>
  (Object.fromEntries(keys.map(k => [k, o[k]])) as unknown) as PickFrom<
    TObject,
    TKeys
  >;

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
