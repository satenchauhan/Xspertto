import { Magic } from '@magic-sdk/react-native';
import config from '../../config/config';
const magic = new Magic(config.DEV_ENV.MAGIC_API_KEY); 

export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    return cb({ isLoggedIn: true, email: user.email });
  }
  return cb({ isLoggedIn: false });
};

export const loginUser = async (userEmail) => {
    const token =  await magic.auth.loginWithMagicLink({email:userEmail});
    return token;
};

export const userLogout = async () => {
    await magic.user.logout();
};

export {magic};


/* 
m.user;
m.user.getIdToken;
m.user.generateIdToken;
m.user.getMetadata;
m.user.isLoggedIn;
m.user.logout;
*/