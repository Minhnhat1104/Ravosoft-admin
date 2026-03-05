import { PalleteColor } from '~/themes/types/theme';

type UserRecord = {
  name: string;
  createdOn: string;
  number: string;
  status: {
    label: 'Completed' | 'Failed' | 'Successful' | 'Pending';
    color: PalleteColor;
  };
  email: string;
};

export const users: UserRecord[] = [
  {
    name: 'John',
    createdOn: '21,Dec 2023',
    number: '+1234-12340',
    status: { label: 'Completed', color: 'primary' },
    email: 'kimosukuro@gmail.com',
  },
  {
    name: 'Vareni',
    createdOn: '29,April 2023',
    number: '+1523-12459',
    status: { label: 'Failed', color: 'error' },
    email: 'hasimna2132@gmail.com',
  },
  {
    name: 'Sasra',
    createdOn: '30,Nov 2023',
    number: '+1982-16234',
    status: { label: 'Successful', color: 'success' },
    email: 'azimokhan421@gmail.com',
  },
  {
    name: 'Widoyi',
    createdOn: '18,Mar 2023',
    number: '+1526-10729',
    status: { label: 'Pending', color: 'secondary' },
    email: 'julianasams143@gmail.com',
  },
];
