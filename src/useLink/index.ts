import createResourceHook from '../creators/createResourceHook';
import { isBrowser } from '../utils/common';

const useLink = createResourceHook<Partial<HTMLLinkElement>>(
  'link',
  ({ href }) =>
    isBrowser() && !!href && !document.querySelector(`link[href="${href}"]`),
  element => document.head.appendChild(element),
);

export default useLink;
