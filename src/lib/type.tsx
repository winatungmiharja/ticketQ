export type LoginUserType = {
  email: string;
  password: string;
};

export type RegisterUserType = {
  name: string;
  username: string;
  email: string;
  password: string;
  country: string;
  telp: string;
};

export type SessionUserType = {
  id_session_account: string;
  id_account: string;
  name_account: string;
  username_account: string;
  email_account: string;
  id_contact: string;
  telp_contact: string;
  id_country: string;
};

export type CountryDataType = {
  id_country: string;
  iso_country: string;
  name_capital_country: string;
  name_country: string;
  iso3_country: string;
  numcode_country: string;
  phonecode_country: string;
};

export type CustomerDataType = {
  id_customer: string;
  firstname_customer: string;
  lastname_customer: string;
  address_customer: string;
  type_age_customer: string;
  gender_customer: string;
  nationality_customer: string;
  id_account: string;
  id_country: string;
  email_contact: string;
  telp_contact: string;
};

export type ScheduleType = {
  id_schedule: string;
  id_plane: string;
  id_route: string;
  departure_schedule: string;
  arrival_schedule: string;
  available_seat_schedule: string;
  normal_price_schedule: string;
  start_city_route: string;
  destination_city_route: string;
  start_airport_route: string;
  destination_airport_route: string;
  capacity_plane: string;
  company_plane: string;
  type_plane: string;
};
