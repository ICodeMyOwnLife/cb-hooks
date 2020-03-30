import { useReducer, useCallback, Reducer } from 'react';

const reducer = <TValue>(
  state: readonly TValue[],
  action: ArrayAction<TValue>,
) => {
  switch (action.type) {
    case 'append':
      return [...state, action.payload];

    case 'prepend':
      return [action.payload, ...state];

    case 'filter':
      return state.filter(action.payload);

    default:
      return state;
  }
};

const useArray = <TValue>(initialValue: readonly TValue[] = []) => {
  const [array, dispatch] = useReducer<
    Reducer<readonly TValue[], ArrayAction<TValue>>
  >(reducer, initialValue);

  const append = useCallback(
    (item: TValue) => dispatch({ type: 'append', payload: item }),
    [dispatch],
  );

  const prepend = useCallback(
    (item: TValue) => dispatch({ type: 'prepend', payload: item }),
    [dispatch],
  );

  const filter = useCallback(
    (predicate: (value: TValue, index: number) => boolean) =>
      dispatch({ type: 'filter', payload: predicate }),
    [dispatch],
  );

  return [array, append, prepend, filter] as const;
};

export default useArray;

type AppendAction<TValue> = { type: 'append'; payload: TValue };
type PrependAction<TValue> = { type: 'prepend'; payload: TValue };
type FilterAction<TValue> = {
  type: 'filter';
  payload: (value: TValue, index: number) => boolean;
};
type ArrayAction<TValue> =
  | AppendAction<TValue>
  | PrependAction<TValue>
  | FilterAction<TValue>;
