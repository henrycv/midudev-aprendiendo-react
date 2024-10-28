import { Card } from '@tremor/react';
import React, { useContext } from 'react';
import { UserContext } from '.';
import { Form } from './form';
import { RegisteredUser } from './users.interface';
// import { useUserActions } from './hooks';

export function Update() {
  const { user, setUser } = useContext(UserContext);

  if (!user.id) {
    return null;
  }
  // const { updateSomeUser } = useUserActions();

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim() as string;
    const email = formData.get('email')?.toString().trim() as string;
    const phone = formData.get('phone')?.toString().trim() as string;
    const website = formData.get('website')?.toString().trim() as string;

    //
    // ToDo: implement the persistance of che form value on User selected
    //
    // updateSomeUser({ name, email, phone, website });
    form.reset();
    setUser({} as RegisteredUser);
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUser({} as RegisteredUser);
    event.currentTarget.form?.reset();
  };

  return (
    <Card>
      <div className="sm:mx-auto sm:max-w-2xl text-left">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Update User
        </h3>
        <Form
          user={user}
          setUser={setUser}
          submitHandler={handleUpdate}
          resetHandler={handleReset}
        />
      </div>
    </Card>
  );
}
