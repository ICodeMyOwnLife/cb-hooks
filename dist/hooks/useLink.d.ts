declare const useLink: (attrs: Partial<HTMLLinkElement>, onLoad?: ((e: Event) => void) | undefined, onError?: ((e: ErrorEvent) => void) | undefined, initialState?: import("cb-toolset/function").ValueFactory<import("../types/common").AsyncState<unknown, unknown>>) => import("../types/common").AsyncState<unknown, unknown>;
export default useLink;
