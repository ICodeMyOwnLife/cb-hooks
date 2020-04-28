/* eslint-disable no-param-reassign */
import { useEffect, DependencyList } from 'react';

const useBase = (attrs: BaseAttributes, deps: DependencyList = []) =>
  useEffect(() => {
    const setBaseAttrs = (
      baseElement: HTMLBaseElement,
      baseAttrs: BaseAttributes,
    ) => {
      const { href, target } = baseAttrs;
      const prevAttrs: BaseAttributes = {
        href: baseElement.href,
        target: baseElement.target,
      };
      if (href) baseElement.href = href;
      if (target) baseElement.target = target;
      return prevAttrs;
    };

    const base = document.querySelector('base');

    if (base) {
      const baseElement = base;
      const prevAttrs = setBaseAttrs(baseElement, attrs);
      return () => setBaseAttrs(baseElement, prevAttrs);
    }

    const baseElement = document.createElement('base');
    setBaseAttrs(baseElement, attrs);
    document.head.insertAdjacentElement('afterbegin', baseElement);
    return () => baseElement.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

export default useBase;

export interface BaseAttributes {
  href?: string;
  target?: string;
}
