declare const useLazyLoad: ({ getSrc, ...options }?: UseLazyLoadOptions) => UseLazyLoadRegister;
export default useLazyLoad;
export interface UseLazyLoadOptions extends IntersectionObserverInit {
    getSrc?: (image: HTMLImageElement) => string | null | undefined;
}
export interface UseLazyLoadRegister {
    (image: HTMLImageElement): void;
    (src: string): (image: HTMLImageElement) => void;
}
