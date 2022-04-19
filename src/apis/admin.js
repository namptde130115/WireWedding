import AxiosClient from './axiosClient';

const adminApi = {
  getAllVendors: (payload) => {
    const url = '/admin/vendors';
    return AxiosClient.get(url);
  },
  getAllKols: (payload) => {
    const url = '/admin/kols';
    return AxiosClient.get(url);
  },
  updateStatus: (body) => {
    const url = `/admin/status/${body.id}`;
    return AxiosClient.put(url, body.status);
  },
};

export default adminApi;
