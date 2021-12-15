export type LoginUserType = {
  email: string;
  password: string;
};

export type RegisterUserType = {
  name: string;
  username: string;
  email: string;
  password: string;
};

export type SessionUserType = {
  id_session_account: string;
  id_account: string;
  name_account: string;
  username_account: string;
  email_account: string;
};
