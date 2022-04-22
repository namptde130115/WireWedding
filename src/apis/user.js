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
  getAllSingleService: () => {
    const url = '/single-service';
    return AxiosClient.get(url);
  },
  getAllServicePack: () => {
    const url = '/service-pack';
    return AxiosClient.get(url);
  },
};

export default userApi;
