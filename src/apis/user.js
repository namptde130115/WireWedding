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
  // Single Service
  getAllSingleService: (pageNo) => {
    const url = `single-service/`;
    return AxiosClient.get(url, {
      params: { pageNo: pageNo },
    });
  },
  getAllServicesByCategory: (id) => {
    const url = `/single-service/category/${id}`;
    return AxiosClient.get(url);
  },

  // Service Pack
  getAllServicePack: () => {
    const url = '/service-pack';
    return AxiosClient.get(url);
  },

  getDetailPack: (id) => {
    const url = `/service-pack/${id}`;
    return AxiosClient.get(url);
  },
  signUpCustomer: (body) => {
    const url = `/customer`;
    return AxiosClient.post(url, body);
  },

  facebooklogin: (payload) => {
    const url = '/account/facebook-login';
    return AxiosClient.post(url, payload);
  },
  googleLogin: ({ email, name }) => {
    const url = '/account/google-login';
    return AxiosClient.post(url, { email, name });
  },
};

export default userApi;
