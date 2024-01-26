import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://65b424ab770d43aba47af6a9.mockapi.io';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, API) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (error) {
      return API.rejectWithValue(error.message);
    }
  }
);
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, API) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return API.rejectWithValue(error.message);
    }
  }
);
export const removeContacts = createAsyncThunk(
    'contacts/removeContacts',
    async ({ id }, API) => {
      try {
        const response = await axios.delete(`/contacts/${id}`);
        return response.data;
      } catch (error) {
        return API.rejectWithValue(error.message);
      }
    }
)