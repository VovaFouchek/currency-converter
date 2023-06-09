import axios from 'axios';

export const axiosConfig = {
  baseURL: 'https://api.exchangerate.host/latest',
};

const instance = axios.create(axiosConfig);

// Interceptors
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 500) {
      return instance(error.config);
    }
    throw error.response;
  }
);

export default instance;
