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
  createGroup: (body) => {
    const url = `guest/list`;
    return AxiosClient.post(url, body);
  },
  deleteGroup: (id) => {
    const url = `guest/list/${id}`;
    return AxiosClient.delete(url);
  },
  updateGroupName: (body) => {
    const url = `guest`;
    return AxiosClient.post(url, body.data, {
      params: { guestListId: body.id },
    });
  },
  updateGuest: (body) => {
    const url = `guest/${body.guestId}`;
    return AxiosClient.put(url, body.data, {
      params: { guestListId: body.guestListId },
    });
  },
  updateGuestList: (body) => {
    const url = `guest/list/${body.id}`;
    return AxiosClient.put(url, body.data);
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
