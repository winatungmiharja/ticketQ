export const saveUserToken = (token: string) => {
  localStorage.setItem('user_token', JSON.stringify(token));
};

export const deleteUserToken = () => {
  localStorage.removeItem('user_token');
};
