import { configureStore, Tuple, type Middleware } from '@reduxjs/toolkit';
import usersReducer, { USERS_KEY_PERSISTANCE } from '../components/users/store/slice';

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem(USERS_KEY_PERSISTANCE, JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: () => new Tuple(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
