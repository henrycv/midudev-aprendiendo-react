import { Divider } from '@tremor/react';
import { createContext, useState } from 'react';
import { Create } from './create.tsx';
import List from './list.tsx';
import { Update } from './update.tsx';
import { IUserContext, RegisteredUser } from './users.interface.ts';

export const UserContext = createContext<IUserContext>({
  user: {} as RegisteredUser,
  setUser: () => {},
});

export default function Users() {
  const [user, setUser] = useState({} as RegisteredUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <List />
      <Divider />
      <Create />
      <Update />
    </UserContext.Provider>
  );
}
