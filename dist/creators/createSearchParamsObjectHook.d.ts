import { Context } from 'react';
import { RouteComponentProps } from 'react-router';
declare const createSearchParamsObjectHook: (routerContext: Context<RouteComponentProps<{}, import("react-router").StaticContext, import("history").History.PoorMansUnknown>>) => <TSearchObject>() => TSearchObject;
export default createSearchParamsObjectHook;
