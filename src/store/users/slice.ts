import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../components/users/users.interface';
import users from '../../components/users/users.json';

interface UserWithId extends User {
  id: number;
}

const initialState: UserWithId[] = users;

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
