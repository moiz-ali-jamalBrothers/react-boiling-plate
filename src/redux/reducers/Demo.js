import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from 'app/api';
import { getDataByBody, 
  // getRequest,
   postRequest, putRequest } from 'app/fetch';

const initialState = {
  categories: [],
  UpdateCategory: [],
  parents: [],
  AddCategory: [],
  categoriesByParentId: [],
};

// GET REQUESTS
export const GetCategories = createAsyncThunk('GetCategories', async body => {
  const result = await getDataByBody(`${BASE_URL}/GetCategories`, body);
  return result;
});

// GET REQUESTS
export const GetCategoryParents = createAsyncThunk('GetCategoryParents', async body => {
  const result = await getDataByBody(`${BASE_URL}/GetCategoryParents`, body);
  return result;
});

export const fetchCategoriesByParentId = createAsyncThunk('fetchCategoriesByParentId', async body => {
  const result = await getDataByBody(`${BASE_URL}/GetCategoriesByParentId`, body);
  return result;
});

// POST REQUEST
export const AddCategory = createAsyncThunk('AddCategory', async body => {
  const result = await postRequest(`${BASE_URL}/AddCategory`, body);
  return result;
});

// PUT REQUESTS
export const UpdateCategory = createAsyncThunk('UpdateCategory', async body => {
  const result = await putRequest(`${BASE_URL}/UpdateCategory`, body);
  return result;
});

const categoriesReducers = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    // GET
    [GetDemoData.pending]: (state, action) => {
      const data = action.payload;
      state.demoData = data;
      return state;
    },
    // GET
    [GetCategoryParents.fulfilled]: (state, action) => {
      const data = action.payload;
      state.parents = data;
      return state;
    },
    //Get
    [fetchCategoriesByParentId.rejected]: (state, action) => {
      const data = action.payload;
      state.categoriesByParentId = data;
      return state;
    },
  },
});

export default DemoReducers.reducer;
