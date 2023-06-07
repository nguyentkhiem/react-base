import React, { useState, createContext, useContext } from 'react';

interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumbs[];
  setBreadcrumbs: (data: IBreadcrumbs[]) => void;
}

/* eslint-disable-next-line */
export const BreadcrumbsContext = createContext({} as BreadcrumbsProps);

export const BreadcrumbsProvider = (props: any) => {
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbs[]>([]);

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        setBreadcrumbs: (data: IBreadcrumbs[]) => setBreadcrumbs(data),
      }}
    >
      {props.children}
    </BreadcrumbsContext.Provider>
  );
};

export const useBreadcrumbs = () => useContext(BreadcrumbsContext);
