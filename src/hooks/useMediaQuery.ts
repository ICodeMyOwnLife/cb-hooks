/**
 * References:
 * https://material-ui.com/components/use-media-query/
 * https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/useMediaQuery/useMediaQuery.js
 * https://github.com/streamich/react-use/blob/master/src/useMedia.ts
 * https://github.com/jaredpalmer/the-platform/blob/master/src/useMedia.tsx
 * https://usehooks.com/useMedia/
 * https://github.com/ReactTraining/react-media
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
 * https://gomakethings.com/a-better-way-to-test-breakpoints-with-vanilla-javascript/
 * https://github.com/akiran/json2mq
 */

import { useState, useEffect } from 'react';
import { pickFrom, PickFrom } from 'cb-toolset/object';
import { isBrowser } from 'cb-toolset/dom';
import { ValueFactory } from 'cb-toolset/function';

const getMediaResult = (mql: MediaQueryList): MediaResult =>
  pickFrom(mql, 'matches', 'media');

const useMediaQuery = (
  query: string,
  initialState: ValueFactory<MediaResult> = { media: '', matches: false },
) => {
  const [result, setResult] = useState(
    isBrowser() ? () => getMediaResult(window.matchMedia(query)) : initialState,
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => {
      setResult(e);
    };
    setResult(getMediaResult(mql));
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, [query]);

  return result;
};

export default useMediaQuery;

export type MediaResult = PickFrom<MediaQueryList, 'matches' | 'media'>;
