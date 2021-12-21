import create from 'zustand';

import { SessionUserType } from '../../lib/type';

export interface UserType {
  id: string;
  name: string;
  username: string;
  email: string;
  id_contact: string;
  id_country: string;
  telp: string;
}

const makeSession = (data: SessionUserType): UserType => {
  return {
    id: data.id_account,
    name: data.name_account,
    username: data.username_account,
    email: data.email_account,
    id_contact: data.id_contact,
    id_country: data.id_country,
    telp: data.telp_contact,
  };
};

type UserStore = {
  user: UserType;
  setSessionUser(data: SessionUserType): void;
};

const useUserAuth = create<UserStore>((set) => ({
  user: {
    id: '',
    name: '',
    username: '',
    email: '',
    id_contact: '',
    id_country: '',
    telp: '',
  },
  // user: testingUser,
  setSessionUser(data: SessionUserType) {
    set((state) => ({ ...state, user: makeSession(data) }));
  },
}));

export default useUserAuth;
