import AxiosClient from './axiosClient';

const kolApi = {
  signUpKol: (payload) => {
    const url = '/kol';
    return AxiosClient.post(url, payload);
  },
  getAllServicesByCategory: (id) => {
    const url = `/single-service/category/${id}`;
    return AxiosClient.get(url);
  },
  getAllPackCatagory: () => {
    const url = '/package-category';
    return AxiosClient.get(url);
  },
  createPackageCategory: (payload) => {
    const url = '/service-pack';
    return AxiosClient.post(url, payload);
  },
  addServiceIntoPack: (body) => {
    const url = `/service-pack/${body.idPack}/single-service`;
    return AxiosClient.post(url, null, {
      params: {
        singlePostId: body.idService,
      },
    });
  },
  getAllServiceByPackIdByCatagory: (body) => {
    const url = `/service-pack/${body.packId}/single-services`;
    return AxiosClient.get(url, { params: { categoryId: body.categoryId } });
  },
  getAllPackByKol: () => {
    const url = '/service-pack/kol';
    return AxiosClient.get(url);
  },
  getServicePackById: (id) => {
    const url = `/service-pack/${id}`;
    return AxiosClient.get(url);
  },
  removeServiceFromPack: (body) => {
    const url = `service-pack/${body.packId}/single-service`;
    return AxiosClient.delete(url, {
      params: { singlePostId: body.categoryId },
    });
  },
  updateServiceByPack: (body) => {
    const url = `/service-pack/${body.packId}`;
    return AxiosClient.put(url, body.data);
  },
  deletePack: (id) => {
    const url = `service-pack/${id}`;
    return AxiosClient.delete(url);
  },
  getInforKol: () => {
    const url = '/kol';
    return AxiosClient.get(url);
  },
  updateInforKol: (payload) => {
    const url = '/kol';
    return AxiosClient.put(url, payload);
  },
  updatePassword: (payload) => {
    const url = '/account/password';
    return AxiosClient.put(url, payload);
  },
};

export default kolApi;
