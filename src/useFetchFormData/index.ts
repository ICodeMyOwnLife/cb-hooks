import createFetchHook from '../creators/createFetchHook';

const useFetchFormData = createFetchHook(fetch, res => res.formData());

export default useFetchFormData;
