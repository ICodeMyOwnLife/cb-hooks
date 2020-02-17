import { DependencyList } from 'react';
declare const useInterval: (callback: VoidFunction | null | undefined, { period, leading, running, deps, }: UseIntervalSettings) => void;
export default useInterval;
export interface UseIntervalSettings {
    deps?: DependencyList;
    leading?: boolean;
    period: number;
    running?: boolean;
}
