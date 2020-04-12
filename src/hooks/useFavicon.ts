/**
 * References:
 * https://github.com/streamich/react-use/blob/c0574064ca/src/useFavicon.ts
 */

import useUpdatedLink from './useUpdatedLink';

const useFavicon = (href: string) =>
  useUpdatedLink(
    { href, rel: `shortcut icon`, type: `image/x-icon` },
    `link[rel='shortcut icon']`,
    [href],
  );

export default useFavicon;
