import { UserType } from '@/components/store/authUser';

import { CustomerDataType, LoginUserType, RegisterUserType } from './type';

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
    telp_account: data.telp,
    id_country: data.country,
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

export const registerCustomer = async (
  data: CustomerDataType,
  user: UserType
) => {
  const url = `${corsProvider}${apiProvider}/customer/customerInput.php`;
  const newData = {
    ...data,
    id_account: user.id,
    id_country:
      data.email_contact === user.email ? user.id_country : data.id_country,
    telp_contact:
      data.email_contact === user.email ? user.telp : data.telp_contact,
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

export const getCountryData = async () => {
  const url = `${apiProvider}/country/country.php`;
  const res = await fetch(url);
  const resData = await res.json();
  return resData;
};

export const getScheduleData = async () => {
  const url = `${apiProvider}/schedule/scheduleGetData.php`;
  const res = await fetch(url);
  const resData = await res.json();
  return resData;
};

export const getScheduleById = async (data: string) => {
  const url = `${apiProvider}/schedule/scheduleGetData.php`;
  const newData = {
    id_schedule: data,
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

export const getCustomerData = async (data: string) => {
  const url = `${apiProvider}/customer/customerGetData.php`;
  const newData = {
    id_account: data,
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

export const postTransaction = async (
  id_schedule: string,
  id_customer: string
) => {
  const url = `${corsProvider}${apiProvider}/transaction/transactionInput.php`;
  const newData = {
    id_schedule,
    id_customer,
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

export const getTransactionData = async (id_account: string) => {
  const url = `${corsProvider}${apiProvider}/transaction/transactionGetData.php`;
  const newData = {
    id_account,
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

export const getTransactionDataById = async (
  id_account: string,
  id_schedule: string
) => {
  const url = `${corsProvider}${apiProvider}/transaction/transactionGetData.php`;
  const newData = {
    id_schedule,
  };

  const res = await fetch(url, {
    body: JSON.stringify(newData),
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await res.json();

  if (resData.isSuccess) {
    const newData = resData.data.filter(
      (item: { id_account: string }) => item.id_account === id_account
    );
    return { success: true, data: newData };
  } else {
    return { success: false, message: resData.message };
  }
};
