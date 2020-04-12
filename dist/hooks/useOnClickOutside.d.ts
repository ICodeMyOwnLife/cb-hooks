import { RefObject } from 'react';
declare const useOnClickOutside: (nodeRef: RefObject<Node>, handleClickOutside: ClickHandler) => void;
export default useOnClickOutside;
export declare type ClickHandler = (e: TouchEvent | MouseEvent) => void;
