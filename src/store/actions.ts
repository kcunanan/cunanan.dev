import { createAction } from '@reduxjs/toolkit';
import api from '../api';
import ACTION_TYPES from '../constants/actions';

import { ISite } from '../interfaces';
import { AppDispatch } from '.';

function handleFailureAndErrors(error: any) {
  return {
    payload: error,
  };
}

const loadingStarted = createAction(ACTION_TYPES.START_LOADING);
export function startLoading() {
  return (dispatch: AppDispatch): boolean => {
    dispatch(loadingStarted());
    return true;
  };
}

const loadingStopped = createAction(ACTION_TYPES.STOP_LOADING);
export function stopLoading() {
  return (dispatch: AppDispatch): boolean => {
    dispatch(loadingStopped());
    return false;
  };
}

const getSiteRequest = createAction(ACTION_TYPES.GET_SITE);
const getSiteSuccess = createAction<ISite>(ACTION_TYPES.GET_SITE_SUCCESS);
const getSiteFailure = createAction(
  ACTION_TYPES.GET_SITE_FAILURE,
  handleFailureAndErrors,
);
export function getSite(apiKey: string) {
  return async (dispatch: AppDispatch): Promise<ISite> => {
    dispatch(getSiteRequest);
    try {
      const {
        data: { siteByKey: data },
      } = await api.getSite(apiKey);
      dispatch(getSiteSuccess(data));
      return data;
    } catch (error) {
      dispatch(getSiteFailure(error));
      return error;
    }
  };
}
