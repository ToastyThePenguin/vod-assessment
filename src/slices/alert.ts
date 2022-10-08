import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'alert',
  initialState: {
    message: null,
    type: 'warning',
    show: false
  },
  reducers: {
    showAlert(state, action) {
      const { message, type } = action.payload
      if (state.show === true) return;
      state.message = message;
      state.type = type;
      state.show = true;
    },
    hideAlert(state) {
      state.show = false;
      state.message = null;
    },
  },
});

export const { reducer } = slice;

export const showAlert = (message: string, type: string) => async (dispatch: (arg0: { payload: any; type: string; }) => void) => {
  dispatch(slice.actions.showAlert({ message, type }));
};

export const hideAlert = () => async (dispatch: (arg0: { payload: undefined; type: string; }) => void) => {
  dispatch(slice.actions.hideAlert());
};

export default slice;
