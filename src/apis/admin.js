import AxiosClient from './axiosClient';

const adminApi = {
  getAllVendors: (payload) => {
    const url = '/account/vendors';
    return AxiosClient.get(url);
  },
  getAllKols: (payload) => {
    const url = '/account/kols';
    return AxiosClient.get(url);
  },
  updateStatus: (body) => {
    const url = `/account/status/${body.id}`;
    return AxiosClient.put(url, body.status);
  },
};

export default adminApi;
