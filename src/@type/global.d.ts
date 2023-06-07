type ID = string | number | undefined;
type LayoutDefaultProps = {
  children?: ReactNode;
};

type ValueOptions = {
  config?: AxiosRequestConfig;
  params?: { [x: string]: any } | undefined;
  data?: { [x: string]: any };
};

type AppContextProps = {
  props: {
    [x: string]: any;
  };
  setProps: (props: { [x: string]: any }) => void;
};

type ModalDefaultProps = {
  onClose?: () => void;
};

type ModalContextProps = {
  component: React.ComponentType<T> | null;
  props: T;
  showModal: <T>(component: React.ComponentType<T & ModalDefaultProps> | null, props?: T) => void;
  hideModal: () => void;
};

type RoutesObject = {
  path: string;
  name?: string;
  icon?: ReactNode;
  component: string;
  hideInMenu?: boolean;
  layout?: ReactNode;
  roles?: string['ADMIN' | 'USER' | 'GUEST'];
};

type RoutesConfig = {
  path: string;
  name?: string;
  hideInMenu?: boolean;
  icon?: ReactNode;
  layout: ReactNode;
  routes?: RoutesObject[];
};

type IBreadcrumbs = {
  path?: string | ReactNode;
  icon?: ReactNode;
  title?: string | ReactNode;
};

type IUser = {
  id?: ID;
  email?: string;
  is_admin?: boolean;
  image?: {
    image?: string;
    id?: ID;
  };
  first_name?: string;
  last_name?: string;
  position?: string;
  phone?: string;
  department?: string;
  [x: string]: any;
};

type ResponseGenerator = {
  config?: any;
  data?: any;
  body?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
};
