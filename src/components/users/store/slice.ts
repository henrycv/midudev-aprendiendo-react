import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserId } from '../users.interface';
import users from '../users.json';

const initialState: User[] = users;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;
