import { Context, useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { createURLSearchObject } from 'cb-toolset/dom';

const createSearchParamsObjectHook = (
  routerContext: Context<RouteComponentProps>,
) => <TSearchObject>() => {
  const searchString = useContext(routerContext).location.search;
  return createURLSearchObject<TSearchObject>(searchString);
};

export default createSearchParamsObjectHook;
