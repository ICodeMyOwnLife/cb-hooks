declare const useLazyLoad: () => LazyLoadRegister;
export default useLazyLoad;
export interface LazyLoadRegister {
    (image: HTMLImageElement): void;
    (src: string): (image: HTMLImageElement) => void;
}
