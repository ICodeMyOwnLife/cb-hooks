import { DependencyList } from 'react';
import { OmitFrom } from 'cb-toolset/object';
import { ValueFactory } from 'cb-toolset/function';
declare const useIntersectionObserverEffect: (getTargets: () => Element[] | null | undefined, callback: IntersectionObserverCallback, options?: UseIntersectionObserverEffectOptions | undefined, deps?: DependencyList) => void;
export default useIntersectionObserverEffect;
export interface UseIntersectionObserverEffectOptions extends OmitFrom<IntersectionObserverInit, 'root'> {
    root?: ValueFactory<Element | undefined | null>;
}
