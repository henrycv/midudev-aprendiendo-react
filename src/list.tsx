import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react';

const data: {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  status: number;
}[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    status: 1,
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    status: 1,
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    status: 1,
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    status: 1,
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    email: 'Lucio_Hettinger@annie.ca',
    phone: '(254)954-1289',
    website: 'demarco.info',
    status: 1,
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    email: 'Karley_Dach@jasper.info',
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    status: 1,
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    email: 'Telly.Hoeger@billy.biz',
    phone: '210.067.6132',
    website: 'elvis.io',
    status: 1,
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    email: 'Sherwood@rosamond.me',
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    status: 1,
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    email: 'Chaim_McDermott@dana.io',
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    status: 1,
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    email: 'Rey.Padberg@karina.biz',
    phone: '024-648-3804',
    website: 'ambrose.net',
    status: 1,
  },
];

export default function List() {
  return (
    <>
      <Title>
        User list
        <Badge>{data.length}</Badge>
      </Title>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              ID
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              NAME
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              EMAIL
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              PHONE
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              WEBSITE
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              STATUS
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              ACTIONS
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted">
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.id}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.website}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
