import { Divider } from '@tremor/react';
import { Create } from './create.tsx';
import List from './list.tsx';

export default function Users() {
  return (
    <>
      <List />
      <Divider />
      <Create />
    </>
  );
}
