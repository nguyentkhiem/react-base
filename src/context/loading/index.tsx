import { Spin } from 'antd';
import React, { useState, createContext, useContext } from 'react';

interface LoadingProps {
  loading: boolean;
  setShow: () => void;
  setHide: () => void;
}

/* eslint-disable-next-line */
export const LoadingContext = createContext({} as LoadingProps);

export const LoadingProvider = (props: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading: loading,
        setShow: () => setLoading(true),
        setHide: () => setLoading(false),
      }}
    >
      <Spin spinning={loading}>{props.children}</Spin>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
