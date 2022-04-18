import AxiosClient from './axiosClient';

const vendorApi = {
  signUp: (payload) => {
    const url = '/vendor';
    return AxiosClient.post(url, payload);
  },
  createSingleService: (payload) => {
    const url = '/single-service';
    return AxiosClient.post(url, payload);
  },
  getListSingleService: (payload) => {
    const url = `/single-service/vendor/${payload}`;
    return AxiosClient.get(url);
  },
  editSingleService: (payload) => {
    const url = `/single-service/${payload.id}`;
    return AxiosClient.put(url, payload.body);
  },
};

export default vendorApi;
