import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://6571e4f5d61ba6fcc013e472.mockapi.io",
});

export const fetchAllCars = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/advert`);
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchCars = createAsyncThunk(
  "catalog/fetchCars",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/advert?p=${page}&limit=12`);
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
