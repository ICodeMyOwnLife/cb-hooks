export default class FetchError extends Error {
  constructor(statusText: string, readonly status: number) {
    super(statusText || 'Fetch Error');
  }
}
