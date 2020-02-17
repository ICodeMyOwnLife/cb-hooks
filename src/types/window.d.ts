interface Window {
  readonly ResizeObserver: ResizeObserverConstructor;
}

declare const ResizeObserver: ResizeObserverConstructor;

/**
 * ResizeObserver API
 */
interface ResizeObserver {
  readonly observe: (element: Element) => void;
  readonly unobserve: (element: Element) => void;
  readonly disconnect: VoidFunction;
}

interface ResizeObserverEntry {
  readonly contentRect: DOMRectReadOnly;
  readonly target: Element;
}

type ResizeObserverCallback = (entries: readonly ResizeObserverEntry[]) => void;

interface ResizeObserverConstructor {
  new (callback: ResizeObserverCallback): ResizeObserver;
}
