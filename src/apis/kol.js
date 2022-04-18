import AxiosClient from './axiosClient';

const kolApi = {
  signUpKol: (payload) => {
    const url = '/kol';
    return AxiosClient.post(url, payload);
  },
  getAllServicesByCategory:(body) => {
    const url = `/single-service/category/${body.id}`;
    return AxiosClient.get(url);
  },
};

export default kolApi;
