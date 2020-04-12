import { Context, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { getSearchParamsObject } from '../utils/common';

const createSearchParamsObjectHook = (
  routerContext: Context<RouteComponentProps>,
) => () => {
  const searchString = useContext(routerContext).location.search;
  return getSearchParamsObject(searchString);
};

export default createSearchParamsObjectHook;
