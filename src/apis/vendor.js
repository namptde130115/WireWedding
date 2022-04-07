import AxiosClient from './axiosClient';

const vendorApi = {
  signUp: (payload) => {
    const url = '/vendor';
    return AxiosClient.post(url, payload);
  },
};

export default vendorApi;
