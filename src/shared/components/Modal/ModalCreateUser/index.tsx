import React, { FunctionComponent } from 'react';
import { Modal } from 'antd';
import { ModalCreateUserProps } from 'shared/components/Modal';
import ModalCustom from 'shared/components/Modal/ModalCustom';

const ModalCreateUser: FunctionComponent<ModalCreateUserProps> = ({ onClose, user, createUser }) => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <>
      <Modal title="modal dialog" centered open={true} onOk={() => setIsShow(true)} onCancel={onClose}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
      <ModalCustom title="modal custom" open={isShow} handleCancel={() => setIsShow(false)}>
        <p>custom ???</p>
      </ModalCustom>
    </>
  );
};

export default ModalCreateUser;
