import AxiosClient from './axiosClient';

const vendorApi = {
  signUp: (payload) => {
    const url = '/vendor';
    return AxiosClient.post(url, payload);
  },
  createSingleService: (payload) => {
    const url = '/single-service';
    return AxiosClient.post(url, payload);
  },
  getListSingleService: (payload) => {
    const url = `/single-service/vendor/${payload}`;
    return AxiosClient.get(url);
  },
  editSingleService: (payload) => {
    const url = `/single-service/${payload.id}`;
    return AxiosClient.put(url, payload.body);
  },
  createBlog: (body) => {
    const url = `blog`;
    return AxiosClient.post(url, body);
  },
  getAllByPerson: () => {
    const url = `blog/my-blogs`;
    return AxiosClient.get(url);
  },
  editBlog: (body) => {
    const url = `blog/${body.id}`;
    return AxiosClient.put(url, body.data);
  },
  deleteBlog: (id) => {
    const url = `blog/${id}`;
    return AxiosClient.delete(url);
  },
  getAllBlog: () => {
    const url = `blog`;
    return AxiosClient.get(url);
  },
  getDetailBlog: (id) => {
    const url = `/blog/detail/${id}`;
    return AxiosClient.get(url);
  },
};

export default vendorApi;
