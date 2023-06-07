declare module 'shared/components/Modal' {
  type ModalCreateUserProps = ModalDefaultProps & {
    user?: any;
    createUser?: (value?: any) => void;
  };

  const ModalCreateUser: React.FC<ModalCreateUserProps>;
}
