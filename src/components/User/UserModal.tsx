import React, { Component, useEffect } from "react";
import { Modal, Button, Form, Input, Select } from 'antd';

const UserModal = (props: { record: any; visible: boolean; closeHandle: VoidFunction, onFinish: any }) => {

    const [form] = Form.useForm();
    const { visible, record, closeHandle, onFinish } = props;

    useEffect(() => {
        form.setFieldsValue(record)
    }, [visible]);

    const Onok = () => {
        form.submit()
    };

    const onFinishFailed = errors => {
        console.log('fail:', errors);
    };
    return (
        <>
            <Modal
                title="编辑"
                forceRender
                visible={visible}
                onOk={Onok}
                onCancel={closeHandle}
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="表名"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="中文名"
                        name="real_name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="是否主键"
                        name="is_pk"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Select >
                            <Select.Option value="false">false</Select.Option>
                            <Select.Option value="true">true</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="是否基于时间"
                        name="is_timestamp"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Select >
                            <Select.Option value="false">false</Select.Option>
                            <Select.Option value="true">true</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="是否逻辑删除"
                        name="is_logically_delete"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Select >
                            <Select.Option value="false">false</Select.Option>
                            <Select.Option value="true">true</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="注释"
                        name="comment"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default UserModal;