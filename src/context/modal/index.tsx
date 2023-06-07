import React from 'react';

export const ModalContext = React.createContext<ModalContextProps>({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {},
});

export const ModalProvider = ({ children }: any) => {
  const showModal = (component: any, props: any) => {
    setModal({
      props,
      component,
      showModal,
      hideModal,
    });
  };

  const hideModal = () => {
    setModal({ component: null, props: {}, showModal, hideModal });
  };

  const [modal, setModal] = React.useReducer((o: ModalContextProps, n: ModalContextProps) => ({ ...o, ...n }), {
    props: {},
    component: null,
    showModal,
    hideModal,
  });

  const value = React.useMemo(() => modal, [modal]);

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};

export const ModalRoot: React.FunctionComponent = () => (
  <ModalContext.Consumer>
    {({ component: Component, props, hideModal }: ModalContextProps) =>
      Component ? <Component {...props} onClose={hideModal} /> : null
    }
  </ModalContext.Consumer>
);

// export const useModal = () => {
//   const { showModal, hideModal } = React.useContext(ModalContext);
//   return { showModal, hideModal };
// };
