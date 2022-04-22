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
  editContentCheckList: (body) => {
    const url = `checklist/task/${body.id}`;
    return AxiosClient.put(url, body.data);
  },
  editStatusChecklist: (id) => {
    const url = `checklist/task/status/${id}`;
    return AxiosClient.put(url);
  },
  deleteCheckList: (id) => {
    const url = `checklist/task/${id}`;
    return AxiosClient.delete(url);
  },
  getAllGroup: () => {
    const url = `guest/list`;
    return AxiosClient.get(url);
  },
};

export default customerApi;
