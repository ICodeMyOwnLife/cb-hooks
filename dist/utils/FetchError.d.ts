export default class FetchError extends Error {
    readonly status: number;
    constructor(statusText: string, status: number);
}
