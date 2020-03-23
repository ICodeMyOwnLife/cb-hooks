import useEvent from '../useEvent';

const usePageVisibility = (callback: (state: VisibilityState) => void) =>
  useEvent(document, 'visibilitychange', () =>
    callback?.(document.visibilityState),
  );

export default usePageVisibility;
