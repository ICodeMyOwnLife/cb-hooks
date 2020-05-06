/// <reference types="react" />
declare const useFetch: <TAsyncResult extends any = any>(input: RequestInfo, init?: Pick<RequestInit, "body" | "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "method" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "window"> | undefined, deps?: import("react").DependencyList | undefined, initialState?: {
    loading: boolean;
    result?: undefined;
    error?: undefined;
} | {
    loading: false;
    result?: undefined;
    error: import("../utils/FetchError").default;
} | {
    loading: false;
    result: TAsyncResult;
    error?: undefined;
} | import("cb-toolset/function").FunctionReturns<import("../types/common").AsyncState<TAsyncResult, import("../utils/FetchError").default>> | undefined) => import("../types/common").AsyncState<TAsyncResult, import("../utils/FetchError").default>;
export default useFetch;