import axios from 'axios';

const apiUrl = `https://gotoubun.azurewebsites.net/api/v1`;

const axiosClient = axios.create({
  baseURL: `${apiUrl}`,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const customHeaders = {
    Authorization: '',
  };

  const token = localStorage.getItem('token');
  if (token) {
    customHeaders.Authorization = `${token}`;
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

export default axiosClient;
