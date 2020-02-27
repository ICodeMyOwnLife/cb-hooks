import { DependencyList } from 'react';
declare const useCallbackWithCleanup: <TArgs extends any[]>(callback: (...args: TArgs) => void | VoidFunction, deps?: DependencyList) => (...args: TArgs) => void;
export default useCallbackWithCleanup;
