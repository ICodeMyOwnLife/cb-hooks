declare const useScrollSpy: () => readonly [string | undefined, ScrollSpyRegister];
export default useScrollSpy;
export interface ScrollSpyRegister {
    (element: Element): void;
    (id: string): (element: Element) => void;
}
