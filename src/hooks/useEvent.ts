/**
 * References:
 * https://github.com/donavon/use-event-listener
 * https://github.com/streamich/react-use/blob/master/src/useEvent.ts
 * https://github.com/adambrgmn/hooks/blob/master/src/use-event-listener/index.ts
 */

import { useRef, useEffect } from 'react';
import { ValueFactory } from 'cb-toolset/function';
import useUpdatedRef from './useUpdatedRef';

const getEventTarget = <TElement>(element: ElementType<TElement>) =>
  element instanceof Function ? element() : element;

const isElement = (target: EventTarget | null): target is Element =>
  target instanceof Object && 'matches' in target;

const checkAndInvokeEventListener = (
  listener: EventListener | null,
  event: Event,
  selectors: string | undefined,
) => {
  if (!listener) {
    return;
  }
  if (
    selectors &&
    (!isElement(event.target) || !event.target.matches(selectors))
  ) {
    return;
  }
  listener(event);
};

const useEvent: UseEvent = (
  element: ElementType<EventTarget>,
  eventNames: string | string[],
  listener: EventListener | null,
  {
    capture,
    once,
    passive,
    selectors,
    usingAnimationFrame,
    enabled = true,
  }: UseEventOptions = {},
) => {
  const listenerRef = useUpdatedRef(listener);
  const animationFrameRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const eventTarget = getEventTarget(element);
    if (!eventTarget) {
      return undefined;
    }

    const eventListener = (e: Event) => {
      if (usingAnimationFrame) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = requestAnimationFrame(() =>
          checkAndInvokeEventListener(listenerRef.current, e, selectors),
        );
      } else {
        checkAndInvokeEventListener(listenerRef.current, e, selectors);
      }
    };

    const eventNameList = Array.isArray(eventNames) ? eventNames : [eventNames];

    eventNameList.forEach(eventName =>
      eventTarget.addEventListener(eventName, eventListener, {
        capture,
        once,
        passive,
      }),
    );

    return () => {
      if (usingAnimationFrame && animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      eventNameList.forEach(eventName =>
        eventTarget.removeEventListener(eventName, eventListener, { capture }),
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    element,
    capture,
    once,
    passive,
    selectors,
    usingAnimationFrame,
    enabled,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ...eventNames,
  ]);
};

export default useEvent;

interface UseEvent {
  <TEventName extends keyof WindowEventMap>(
    element: ElementType<Window>,
    eventNames: TEventName | TEventName[],
    listener: (e: WindowEventMap[TEventName]) => void | null,
    options?: UseEventOptions,
  ): void;
  <TEventName extends keyof DocumentEventMap>(
    element: ElementType<Document>,
    eventNames: TEventName | TEventName[],
    listener: (e: DocumentEventMap[TEventName]) => void | null,
    options?: UseEventOptions,
  ): void;
  <TEventName extends keyof HTMLElementEventMap>(
    element: ElementType<HTMLElement>,
    eventNames: TEventName | TEventName[],
    listener: (e: HTMLElementEventMap[TEventName]) => void | null,
    options?: UseEventOptions,
  ): void;
  (
    element: ElementType<EventTarget>,
    eventNames: string | string[],
    listener: EventListener | null,
    options?: UseEventOptions,
  ): void;
}

export interface UseEventOptions extends AddEventListenerOptions {
  selectors?: string;
  usingAnimationFrame?: boolean;
  enabled?: boolean;
}

type ElementType<TElement> = ValueFactory<TElement | null | undefined | false>;
