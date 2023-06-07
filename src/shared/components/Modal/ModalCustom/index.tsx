import React, { CSSProperties, ReactNode } from 'react';
import { Modal } from 'antd';
import styles from './index.module.scss';

interface ITypeModal {
  handleOk?: () => void;
  handleCancel?: () => void;
  className?: any;
  open?: boolean;
  maskClosable?: boolean;
  style?: CSSProperties;
  children?: any;
  closeIcon?: any;
  title?: ReactNode;
}

const ModalCustom = (props: ITypeModal) => {
  const { handleOk, handleCancel, className, open, children, closeIcon, maskClosable, style, title } = props;

  return (
    <Modal
      destroyOnClose={true}
      className={`${className} ${styles.modalCustom}`}
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      closeIcon={closeIcon}
      maskClosable={maskClosable}
      style={style}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalCustom;
