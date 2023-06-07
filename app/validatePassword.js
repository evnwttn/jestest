const validatePassword = (password) => {
  const validLength = password.length >= 8;
  let hasLetter = /[a-zA-Z]/g.test(password);
  let hasNumber = /[0-9]/g.test(password);
  const validPassword = validLength && hasLetter && hasNumber;

  return validPassword;
};

module.exports = validatePassword;
