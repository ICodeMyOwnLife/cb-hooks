import createFetchHook from '../creators/createFetchHook';

const useFetchText = createFetchHook(fetch, res => res.text());

export default useFetchText;
