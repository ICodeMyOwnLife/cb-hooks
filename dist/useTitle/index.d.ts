declare const useTitle: (title: string, options?: UseTitleOptions | undefined) => void;
export default useTitle;
export interface UseTitleOptions {
    restoreOnUnmount?: boolean;
}
