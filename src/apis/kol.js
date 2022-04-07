import AxiosClient from './axiosClient';

const kolApi = {
  signUpKol: (payload) => {
    const url = '/kol';
    return AxiosClient.post(url, payload);
  },
};

export default kolApi;
