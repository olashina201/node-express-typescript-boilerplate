interface ITokenTypes {
  ACCESS: string,
  REFRESH: string,
  RESET_PASSWORD: string,
  VERIFY_EMAIL: string,
};

const tokenTypes: ITokenTypes = {
  ACCESS: 'access',
  REFRESH: 'refresh',
  RESET_PASSWORD: 'resetPassword',
  VERIFY_EMAIL: 'verifyEmail',
};

export default {
  tokenTypes,
};
