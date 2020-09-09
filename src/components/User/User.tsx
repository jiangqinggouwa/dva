import React, { Component } from 'react'
import { Tag, Space, Table } from 'antd';
import { connect } from 'dva'
export interface PropsType {
    users:any
}

class User extends Component <PropsType>{
    constructor(props:PropsType){
        super(props)
    }
    render() {
        const { users } = this.props;
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <a>Invite {record.name}</a>
                  <a>Delete</a>
                </Space>
              ),
            },
          ];
          
          
        return (
            <div>
                <Table columns={columns} dataSource={ users } />
            </div>
        )
    }
}

export default connect(users => users,
)(User)