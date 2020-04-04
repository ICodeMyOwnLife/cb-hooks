import createFetchHook from '../creators/createFetchHook';

const useFetchArrayBuffer = createFetchHook(fetch, res => res.arrayBuffer());

export default useFetchArrayBuffer;
