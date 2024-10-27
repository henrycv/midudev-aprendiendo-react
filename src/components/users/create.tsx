import { Card } from '@tremor/react';
import React from 'react';
import { Form } from './form';
import { useUserActions } from './hooks';
import { StatusUser } from './users.interface';

export function Create() {
  const { createNewUser } = useUserActions();
  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name')?.toString().trim() as string;
    const email = formData.get('email')?.toString().trim() as string;
    const phone = formData.get('phone')?.toString().trim() as string;
    const website = formData.get('website')?.toString().trim() as string;

    createNewUser({ name, email, phone, website, status: StatusUser.ACTIVE });
    form.reset();
  };

  return (
    <Card>
      <div className="sm:mx-auto sm:max-w-2xl text-left">
        <h3 className="text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Create User
        </h3>
        <Form submitHandler={handleCreate} />
      </div>
    </Card>
  );
}
