import { createSlice } from '@reduxjs/toolkit';
import ContentService from '../services/contentService';

export const slice = createSlice({
  name: 'content',
  initialState: {
    collections: [],
    movies: [],
    series: [],
    currentItem: null
  },
  reducers: {
    setCollections(state, action) { state.collections = action.payload },
    setMovies(state, action) { state.movies = action.payload },
    setSeries(state, action) { state.series = action.payload },
    setCurrentItem(state, action) { state.currentItem = action.payload },
  },
});

export const { reducer } = slice;

export const getCollections = () => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  const response = await ContentService.getByType('collection');
  if (response && response !== 'not found') dispatch(slice.actions.setCollections(response.data));
};

export const getMovies = () => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    const response = await ContentService.getByType('movie');
    if (response && response !== 'not found') dispatch(slice.actions.setMovies(response.data));
  };

  export const getSeries = () => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    const response = await ContentService.getByType('series');
    if (response && response !== 'not found') dispatch(slice.actions.setSeries(response.data));
  };

  export const getCurrentItem = (guid: string) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
    const response = await ContentService.getOne(guid);
    if (response && response !== 'not found') dispatch(slice.actions.setCurrentItem(response.data));
  };

export default slice;
