export const validatePassword = (pass: string): boolean => {
  const pattern = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z]).*$/g;
  return pattern.test(pass);
};
export const validateNumber = (phone: string): boolean => {
  const pattern = /^08\d{9,10}$/g;
  return pattern.test(phone);
};
export const validateName = (name: string): boolean => {
  const pattern = /[a-zA-Z][a-zA-Z ]{2,}$/g;
  return pattern.test(name);
};

export const validateTefl = (tefl: string) => {
  const pattern = /^[1-9][0-9]*$/;
  return pattern.test(tefl);
};
