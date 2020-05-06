import { useReducer } from 'react';
import { createUniqueObject } from 'cb-toolset/object';

const useTriggerUpdate = () =>
  useReducer(createUniqueObject, createUniqueObject());

export default useTriggerUpdate;
