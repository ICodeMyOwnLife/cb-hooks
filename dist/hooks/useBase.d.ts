import { DependencyList } from 'react';
declare const useBase: (attrs: BaseAttributes, deps?: DependencyList) => void;
export default useBase;
export interface BaseAttributes {
    href?: string;
    target?: string;
}
