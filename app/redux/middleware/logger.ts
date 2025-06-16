/**
 * Simple logger middleware.
 * Logs the action type, payload, and the resulting state.
 */
/**
 * Simple logger middleware.
 * Logs the action type, payload, and the resulting state.
 */
import type { Middleware } from '@reduxjs/toolkit';
const logger: Middleware = store => next => (action: any) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export default logger;
