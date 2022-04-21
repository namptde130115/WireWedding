import AxiosClient from './axiosClient';

const adminApi = {
  getAllVendors: (payload) => {
    const url = '/admin/vendors?pageSize=100';
    return AxiosClient.get(url);
  },
  getAllKols: (payload) => {
    const url = '/admin/kols?pageSize=100';
    return AxiosClient.get(url);
  },
  updateStatus: (id) => {
    const url = `/admin/status/${id}`;
    return AxiosClient.put(url);
  },
};

export default adminApi;
