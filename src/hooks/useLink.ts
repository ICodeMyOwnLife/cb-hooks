import { isBrowser } from 'cb-toolset/dom';
import createResourceHook from '../creators/createResourceHook';

const useLink = createResourceHook<Partial<HTMLLinkElement>>(
  'link',
  ({ href }) =>
    isBrowser() && !!href && !document.querySelector(`link[href="${href}"]`),
  element => document.head.appendChild(element),
);

export default useLink;
