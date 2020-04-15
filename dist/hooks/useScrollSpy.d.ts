import { UseIntersectionObserverEffectOptions } from './useIntersectionObserverEffect';
declare const useScrollSpy: <TElement extends Element = Element>({ getId, threshold, ...rest }?: UseScrollSpyOptions<TElement>) => readonly [string | undefined, UseScrollSpyRegister<TElement>];
export default useScrollSpy;
export interface UseScrollSpyOptions<TElement> extends UseIntersectionObserverEffectOptions {
    getId?: (element: TElement) => string | null | undefined;
    threshold?: number;
}
export interface UseScrollSpyRegister<TElement extends Element> {
    (element: TElement): void;
    (id: string): (element: TElement) => void;
}
