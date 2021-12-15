import create from 'zustand';

import { SessionUserType } from '@/lib/type';

export interface UserType {
  id: string;
  name: string;
  username: string;
  email: string;
}

//! FOR TESTING ONLY
const testingUser = {
  id: '5',
  name: 'Wina Tungmiharja',
  username: 'winatungmiharja',
  email: 'winatungmiharja@gmail.com',
};

const makeSession = (data: SessionUserType): UserType => {
  return {
    id: data.id_account,
    name: data.name_account,
    username: data.username_account,
    email: data.email_account,
  };
};

type UserStore = {
  user: UserType;
  setSessionUser(data: SessionUserType): void;
};

const useUserAuth = create<UserStore>((set) => ({
  // user: {
  //   id: '',
  //   name: '',
  //   username: '',
  //   email: '',
  // },
  user: testingUser,
  setSessionUser(data: SessionUserType) {
    set((state) => ({ ...state, user: makeSession(data) }));
  },
}));

export default useUserAuth;
