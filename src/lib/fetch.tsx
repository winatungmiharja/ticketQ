import { LoginUserType, RegisterUserType } from './type';

const corsProvider = 'https://cors-anywhere.herokuapp.com/';
const apiProvider = 'https://ticketq-ticketing-plane.herokuapp.com';

export const loginUser = async (data: LoginUserType) => {
  const url = `${corsProvider}${apiProvider}/auth/users/login.php`;
  const newData = {
    username_email_account: data.email,
    password_account: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const sessionUser = async (data: string) => {
  const url = `${corsProvider}${apiProvider}/auth/users/loginGetData.php`;
  const newData = {
    id_session_account: data,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};

export const registerUser = async (data: RegisterUserType) => {
  const url = `${corsProvider}${apiProvider}/auth/users/register.php`;
  const newData = {
    name_account: data.name,
    username_account: data.username,
    email_account: data.email,
    password_account: data.password,
  };
  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();
  return resData;
};
