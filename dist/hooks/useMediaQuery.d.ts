import { PickFrom } from '../types/common';
declare const useMediaQuery: (query: string, initialState?: import("../types/common").ValueFactory<Pick<MediaQueryList, "matches" | "media">>) => Pick<MediaQueryList, "matches" | "media">;
export default useMediaQuery;
export declare type MediaResult = PickFrom<MediaQueryList, 'matches' | 'media'>;
