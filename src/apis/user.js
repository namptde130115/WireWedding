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
  signUpKol: (payload) => {
    const url = '/kol';
    return AxiosClient.post(url, payload);
  },
};

export default userApi;
