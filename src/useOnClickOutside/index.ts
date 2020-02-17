/**
 * References:
 * https://usehooks.com/useOnClickOutside/
 * https://github.com/sandiiarov/use-events/blob/master/src/useClickOutside/index.tsx
 * https://github.com/Andarist/use-onclickoutside/blob/master/src/index.ts
 * https://github.com/streamich/react-use/blob/master/src/useClickAway.ts
 * https://github.com/imbhargav5/rooks/blob/dev/packages/outside-click/src/useOutsideClick.ts
 */

import { RefObject } from 'react';
import useEvent from '../useEvent';

const useOnClickOutside = (
  nodeRef: RefObject<Node>,
  handleClickOutside: ClickHandler,
) =>
  useEvent(document, ['mousedown', 'touchstart'], e => {
    if (
      handleClickOutside &&
      nodeRef.current &&
      !nodeRef.current.contains(e.target as Node)
    ) {
      handleClickOutside(e);
    }
  });

export default useOnClickOutside;

export type ClickHandler = (e: TouchEvent | MouseEvent) => void;
