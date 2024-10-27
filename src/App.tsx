import { Divider } from '@tremor/react';
import './App.css';
import { Create } from './components/users/create';
import List from './components/users/list';

function App() {
  return (
    <>
      <List />
      <Divider />
      <Create />
    </>
  );
}

export default App;
