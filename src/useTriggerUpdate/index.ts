import { useReducer } from 'react';
import { createUniqueObject } from '../utils/common';

const useTriggerUpdate = () =>
  useReducer(createUniqueObject, createUniqueObject());

export default useTriggerUpdate;
