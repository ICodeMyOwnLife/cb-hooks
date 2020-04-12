declare const useEvent: UseEvent;
export default useEvent;
interface UseEvent {
    <TEventName extends keyof WindowEventMap>(element: ElementType<Window>, eventNames: TEventName | TEventName[], listener: (e: WindowEventMap[TEventName]) => void | null, options?: UseEventOptions): void;
    <TEventName extends keyof DocumentEventMap>(element: ElementType<Document>, eventNames: TEventName | TEventName[], listener: (e: DocumentEventMap[TEventName]) => void | null, options?: UseEventOptions): void;
    <TEventName extends keyof HTMLElementEventMap>(element: ElementType<HTMLElement>, eventNames: TEventName | TEventName[], listener: (e: HTMLElementEventMap[TEventName]) => void | null, options?: UseEventOptions): void;
    (element: ElementType<EventTarget>, eventNames: string | string[], listener: EventListener | null, options?: UseEventOptions): void;
}
export interface UseEventOptions extends AddEventListenerOptions {
    selectors?: string;
    usingAnimationFrame?: boolean;
    enabled?: boolean;
}
declare type ElementType<TElement> = TElement | null | undefined | false | (() => TElement | null | undefined | false);
