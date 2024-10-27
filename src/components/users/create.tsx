import { Button, Card, Divider, TextInput } from '@tremor/react';
import React from 'react';
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
        <form action="#" method="post" className="mt-8" onSubmit={handleCreate}>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="col-span-full sm:col-span-3">
              <TextInput
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="First name"
                className="mt-2"
                required
              />
            </div>
            <div>
              <TextInput
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                className="mt-2"
                required
              />
            </div>
            <div className="col-span-full">
              <TextInput
                type="text"
                id="phone"
                name="phone"
                autoComplete="phone"
                placeholder="phone"
                className="mt-2"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <TextInput
                type="text"
                id="website"
                name="website"
                autoComplete="website"
                placeholder="Website"
                className="mt-2"
                required
              />
            </div>
          </div>
          <Divider />
          <div className="flex items-center justify-end space-x-4">
            <Button
              type="reset"
              className="whitespace-nowrap rounded-tremor-small px-4 py-2.5 text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Cancel
            </Button>
            <Button
              type="submit"
              className="whitespace-nowrap rounded-tremor-default bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
