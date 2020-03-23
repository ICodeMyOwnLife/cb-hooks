import { useState } from 'react';
import usePageVisibility from '../usePageVisibility';

const usePageVisibilityState = () => {
  const [state, setState] = useState(document.visibilityState);
  usePageVisibility(setState);
  return state;
};

export default usePageVisibilityState;
