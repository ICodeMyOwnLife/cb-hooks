import { AsyncState } from '../types/common';

export const PENDING_STATE: AsyncState<any, any> = { loading: false };
export const LOADING_STATE: AsyncState<any, any> = { loading: true };
