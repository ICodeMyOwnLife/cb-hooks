import createFetchHook from '../creators/createFetchHook';

const useFetchStream = createFetchHook(fetch, res => Promise.resolve(res.body));

export default useFetchStream;
