import AxiosClient from './axiosClient';

const kolApi = {
  signUpKol: (payload) => {
    const url = '/kol';
    return AxiosClient.post(url, payload);
  },
  getAllServicesByCategory:(id) => {
    const url = `/single-service/category/${id}`;
    return AxiosClient.get(url);
  },
};

export default kolApi;
