import React, { Component } from 'react';
import { Modal, Button } from 'antd';

interface ModalProps {
    show: boolean;
    children: any;
    handleCancel: ()=>void;
    handleOk: ()=>void
}
class ModalUi extends Component<ModalProps>{
    constructor(props: ModalProps) {
        super(props)
    }

    render() {
        const { show, children, handleCancel, handleOk } = this.props
        return (
            <>
                <Modal
                    visible={ show }
                    title="Title"
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={ handleCancel }>取消</Button>,
                        <Button key="submit" type="primary" onClick={ handleOk }>提交</Button>
                    ]}
                >
                    {children}
                </Modal>
            </>
        );
    }
}

export default ModalUi