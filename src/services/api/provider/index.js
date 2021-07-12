import axios from 'axios';
import { handleResponse, handleError } from '../response/index';

const BASE_URL = 'https://fakestoreapi.com/';

const getAll = resource => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getAll,
  getSingle
};
