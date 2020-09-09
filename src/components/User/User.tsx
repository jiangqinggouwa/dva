import React, { Component, useState } from "react"
import { Tag, Space, Table } from "antd";
import { connect } from "dva";
import UserModal from "@components/User/UserModal";

const User = ({ users }) => {
  const [ modalVisible, setModalVisible ] = useState(false);
  const visibleHandle = () => { setModalVisible(true); };
  const closeHandle = () => { setModalVisible(false); };

  const columns = [
    {
      dataIndex: "id",
      title: "id",
      key: "id",
    },
    {
      dataIndex: "name",
      title: "name",
      key: "name",
    },
    {
      dataIndex: "email",
      title: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={visibleHandle }>编辑 </a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={users.data}
        rowKey={(record, index) => index}

      />
      <UserModal visible={modalVisible} closeHandle={closeHandle}/>
    </div>
  )
}

export default connect(
  users => users
)(User)