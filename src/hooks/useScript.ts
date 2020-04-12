import createResourceHook from '../creators/createResourceHook';
import { isBrowser } from '../utils/common';

const useScript = createResourceHook<Partial<HTMLScriptElement>>(
  'script',
  ({ src }) =>
    isBrowser() && !!src && !document.querySelector(`script[src="${src}"]`),
  element => document.body.appendChild(element),
);

export default useScript;
