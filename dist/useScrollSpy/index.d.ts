declare const useScrollSpy: <TElement extends Element = Element>({ getId, ...options }?: UseScrollSpyOptions<TElement>) => readonly [string | undefined, UseScrollSpyRegister<TElement>];
export default useScrollSpy;
export interface UseScrollSpyOptions<TElement extends Element> extends IntersectionObserverInit {
    getId?: (element: TElement) => string | null | undefined;
}
export interface UseScrollSpyRegister<TElement extends Element> {
    (element: TElement): void;
    (id: string): (element: TElement) => void;
}
