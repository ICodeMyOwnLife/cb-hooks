import { isBrowser } from 'cb-toolset/dom';
import createResourceHook from '../creators/createResourceHook';

const useScript = createResourceHook<Partial<HTMLScriptElement>>(
  'script',
  ({ src }) =>
    isBrowser() && !!src && !document.querySelector(`script[src="${src}"]`),
  element => document.body.appendChild(element),
);

export default useScript;
