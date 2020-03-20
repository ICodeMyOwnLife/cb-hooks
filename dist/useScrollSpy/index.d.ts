declare const useScrollSpy: () => [string, ScrollSpyRegister];
export default useScrollSpy;
export interface ScrollSpyRegister {
    (element: Element): void;
    (id: string): (element: Element) => void;
}
