import { PickFrom } from 'cb-toolset/object';
import { ValueFactory } from 'cb-toolset/function';
declare const useMediaQuery: (query: string, initialState?: ValueFactory<Pick<MediaQueryList, "matches" | "media">>) => Pick<MediaQueryList, "matches" | "media">;
export default useMediaQuery;
export declare type MediaResult = PickFrom<MediaQueryList, 'matches' | 'media'>;
