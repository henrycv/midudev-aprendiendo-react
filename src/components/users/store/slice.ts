import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserId } from '../users.interface';
import usersDefaultList from '../users.json';

export const USERS_KEY_PERSISTANCE = '__users_list';

export const getInitialState = (): User[] => {
  const persistedState = localStorage.getItem(USERS_KEY_PERSISTANCE);

  return persistedState ? JSON.parse(persistedState).users : usersDefaultList;
};

const initialState: User[] = (() => getInitialState())();

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetList: () => getInitialState(),
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default userSlice.reducer;
export const { deleteUserById, resetList } = userSlice.actions;
