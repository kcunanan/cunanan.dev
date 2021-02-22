import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "../constants/actions";
import { ISite } from "../interfaces";

const rootReducer = {
  site: createReducer<ISite | null>(null, (builder) => {
    builder
      .addCase(
        ACTION_TYPES.GET_SITE_SUCCESS,
        (_, action: PayloadAction<ISite>) => action.payload
      )
      .addDefaultCase((state) => state);
  }),
  loading: createReducer(false, (builder) => {
    builder
      .addCase(ACTION_TYPES.START_LOADING, () => true)
      .addCase(ACTION_TYPES.STOP_LOADING, () => false)
      .addDefaultCase((state) => state);
  }),
};

export default rootReducer;
