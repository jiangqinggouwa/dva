import React, { Component, useState } from "react"
import { Tag, Space, Table } from "antd";
import { connect } from "dva";
import UserModal from "@components/User/UserModal";
import { Dispatch } from "dva";

const User = (props: { users: any, dispatch: Dispatch }) => {
    const { users, dispatch } = props
    const [modalVisible, setModalVisible] = useState(false);
    const [record, setRecord] = useState(undefined);

    const editHandle = (record) => {
        console.log(Object.keys(record)[0])
        setRecord(record);

        setModalVisible(true);
    };

    const closeHandle = () => {
        setModalVisible(false);
    };

    const onFinish = values => {
        console.log('Finish:', values);
        dispatch({
            type: 'users/edit',
            payload: values
        })
    };

    const columns = [
        {
        title: '表名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '中文名',
        dataIndex: 'real_name',
        key: 'real_name',
    },
    {
        title: '是否主键',
        dataIndex: 'fk_enable',
        key: 'fk_enable',
    },
    {
      title: '是否基于时间',
      dataIndex: 'has_timestamp',
      key: 'has_timestamp',

  },
    {
        title: '是否逻辑删除',
        dataIndex: 'is_logically_delete',
        key: 'is_logically_delete',
        render: text => text?"true":"false"
    },
    {
        title: '注释',
        dataIndex: 'comment',
        key: 'comment',
    },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={() => { editHandle(record) }}>编辑 </a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={users}
                rowKey="id"

            />
            <UserModal onFinish={onFinish} record={record} visible={modalVisible} closeHandle={closeHandle} />
        </div>
    )
}

export default connect(
    users => users
)(User)