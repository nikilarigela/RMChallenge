import { BASE_URL } from '../constants';

export const GET = async (url, params = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, params);
  const data = await response.json();
  return data;
};
