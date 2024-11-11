import axios from 'axios';

const API_URL = 'http://localhost:8000/api/properties/';

export const getProperties = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createProperty = async (propertyData) => {
    const response = await axios.post(API_URL, propertyData);
    return response.data;
};

export const updateProperty = async (id, propertyData) => {
    const response = await axios.put(`${API_URL}${id}/`, propertyData);
    return response.data;
};

export const deleteProperty = async (id) => {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
};
