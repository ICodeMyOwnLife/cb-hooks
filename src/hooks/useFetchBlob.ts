import createFetchHook from '../creators/createFetchHook';

const useFetchBlob = createFetchHook(fetch, res => res.blob());

export default useFetchBlob;
