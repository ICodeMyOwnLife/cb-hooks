import createFetchHook from '../creators/createFetchHook';

const useFetch = createFetchHook(fetch, res => res.json());

export default useFetch;
