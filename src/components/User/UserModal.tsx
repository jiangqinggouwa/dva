import React, { Component } from "react";
import { Modal, Button } from 'antd';

interface PropsType {
  visible: boolean,
  closeHandle: ()=>void
}
class UserModal extends React.Component<PropsType>{
  constructor(props: PropsType) {
    super(props)
  }
closeHandle = () => false;  
  
  render() {
    const { visible, closeHandle } = this.props
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={closeHandle}
          onCancel={closeHandle}
        />
      </>
    );
  }
}

export default UserModal;