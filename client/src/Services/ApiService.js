import axios from 'axios';

const API_Base_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

const apiClient = axios.create({baseURL: API_Base_URL,});

export const fetchProducts = () => apiClient.get('/products');
export const fetchProductsById = (id) => apiClient.get(`/products/${id}`);
export const postProducts = (name, description, price, date) => apiClient.post(`/products/`,{name, description, price, date});
export const putProducts = (name, description, price, date) => apiClient.put(`/products/`,{name, description, price, date});
export const deleteProductsById = (id) => apiClient.delete(`/products/${id}`);