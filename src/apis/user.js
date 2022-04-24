import AxiosClient from './axiosClient';

const userApi = {
  login: (payload) => {
    const url = '/account/login';
    return AxiosClient.post(url, payload);
  },
  signUp: (payload) => {
    const url = '/vendor/register';
    return AxiosClient.post(url, payload);
  },
  facebooklogin: (payload) => {
    const url = '/account/facebook-login';
    return AxiosClient.post(url, payload);
  },
  googleLogin: ({email, name}) => {
    const url = '/account/google-login';
    return AxiosClient.post(url, {email, name});
  },
};

export default userApi;
