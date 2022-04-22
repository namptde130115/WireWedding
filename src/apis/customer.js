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
};

export default customerApi;
