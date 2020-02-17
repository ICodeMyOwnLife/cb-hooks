import { LinkHTMLAttributes } from 'react';
import createResourceHook from '../creators/createResourceHook';
import { isBrowser } from '../utils/common';

const useLink = createResourceHook<LinkHTMLAttributes<HTMLLinkElement>>(
  'link',
  ({ href }) =>
    isBrowser() && !!href && !document.querySelector(`link[href="${href}"]`),
);

export default useLink;
