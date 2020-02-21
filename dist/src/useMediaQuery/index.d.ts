import json2mq from 'json2mq';
import { PickFrom } from '../types/common';
declare const useMediaQuery: (query: string | json2mq.QueryObject, initialState?: import("../types/common").ValueOrFunction<Pick<MediaQueryList, "matches" | "media">>) => Pick<MediaQueryList, "matches" | "media">;
export default useMediaQuery;
export declare type MediaResult = PickFrom<MediaQueryList, 'matches' | 'media'>;
