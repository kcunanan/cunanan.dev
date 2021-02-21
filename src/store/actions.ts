import api from "../api";
import ACTION_TYPES from "../constants/actions";
import { createAction } from "@reduxjs/toolkit";

import { ISite } from "../interfaces";
import { AppDispatch } from "../store";

function handleFailureAndErrors(error: any) {
  return {
    payload: error,
  };
}

const loadingStarted = createAction(ACTION_TYPES.START_LOADING);
export function startLoading() {
  return (dispatch: AppDispatch) => dispatch(loadingStarted);
}

const loadingStopped = createAction(ACTION_TYPES.STOP_LOADING);
export function stopLoading() {
  return (dispatch: AppDispatch) => dispatch(loadingStopped);
}

const getSiteRequest = createAction(
  ACTION_TYPES.GET_SITE
);
const getSiteSuccess = createAction<ISite>(
  ACTION_TYPES.GET_SITE_SUCCESS
);
const getSiteFailure = createAction(
  ACTION_TYPES.GET_SITE_FAILURE,
  handleFailureAndErrors
);
export function getSite(apiKey: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(getSiteRequest);
    dispatch(loadingStarted);
    try {
      const { data: { siteByKey: data } } = await api.getSite(apiKey);
      dispatch(getSiteSuccess(data));
      dispatch(loadingStopped);
      return data
    } catch (error) {
      dispatch(getSiteFailure);
      dispatch(loadingStopped);
      return error;
    }
  };
}