import { ScriptHTMLAttributes } from 'react';
import createResourceHook from '../creators/createResourceHook';
import { isBrowser } from '../utils/common';

const useScript = createResourceHook<ScriptHTMLAttributes<HTMLScriptElement>>(
  'script',
  ({ src }) =>
    isBrowser() && !!src && !document.querySelector(`script=[src="${src}"]`),
);

export default useScript;
