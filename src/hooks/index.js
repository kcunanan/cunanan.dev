import React from 'react';

import { Context } from '_/store/Store';

export const useFetch = (url) => {
  const [{ loaded, fetching }, dispatch] = React.useContext(Context);
  const fetchData = async (cb) => {
    // if the page has loaded or if fetch is currently being run, exit
    if (loaded || fetching.includes(url)) return;
    dispatch({ type: 'SET_FETCHING', payload: [...fetching, url] });
    const response = await fetch(url);
    const { data } = (await response.json()) || {};
    dispatch({ type: 'SET_DATA', payload: data });
    if (cb) {
      cb(data);
    }
    setTimeout(() => {
      const idx = fetching.findIndex((u) => u === url);
      dispatch({ type: 'SET_LOADED', payload: true });
      dispatch({ type: 'SET_FETCHING', payload: [...fetching.slice(0, idx), ...fetching.slice(idx + 1)] });
    }, 1000);
  };
  return [fetchData];
};

export default {
  useFetch,
};
