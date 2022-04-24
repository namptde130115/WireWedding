import AxiosClient from './axiosClient';

const customerApi = {
  getCheckList: () => {
    const url = '/checklist/task';
    return AxiosClient.get(url);
  },
  addCheckListTask: (body) => {
    const url = '/checklist/task';
    return AxiosClient.post(url, body);
  },

  getMyService: () => {
    const url = '/my-service';
    return AxiosClient.get(url);
  },
  addServiceToList: (id) => {
    const url = `/single-service/customer/${id}`;
    return AxiosClient.post(url);
  },
  deleteServiceFromList: (id) => {
    const url = `/my-service/${id}`;
    return AxiosClient.delete(url);
  },
  createPayment: (body) => {
    const url = '/create-payment';
    return AxiosClient.post(url, body);
  },
};

export default customerApi;
