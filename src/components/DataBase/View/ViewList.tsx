import React from 'react';
import {Table, Popconfirm, Button} from 'antd';
import * as Antd from '@assets/styled.antd';

function View() {
    const columns = [
        {
            title: '视图名',
            dataIndex: 'name'
        },
        {
            title: '中文名',
            dataIndex: 'real_name'
        },
        {
            title: 'sql语句',
            dataIndex: 'query_stmt'
        },
        {
            title: '注释',
            dataIndex: 'comment'

        }, 
        {
            title: '操作',
            dataIndex: 'option',
            render() {
                return (
                    <span>
                        <a>编辑</a>
                        <Popconfirm title="Confirm to delete?">
                            <a href="">
                                删除</a>
                        </Popconfirm>
                    </span>
                )
            }
        }
    ];

    const tableData = [];
    for (let i = 0; i < 10; i++) {
        tableData.push({
            key: i,
            name: `view ${
                i + 1
            }`,
            real_name: `视图 ${
                i + 1
            }`,
            query_stmt: `select * from table`,
            comment: `查询视图`
        })
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log('selectedRowKeys changed: ', selectedRowKeys)
            console.log(selectedRowKeys)
        }
    }

    const pagination = {
        total: tableData.length,
        showSizeChanger: true,
        onShowSizeChange(current, pageSize) {
            console.log('Current: ', current, '; PageSize: ')
        },
        onChange(current) {
            console.log('Current: ', current)
        }
    }

    return (
        <>
            <Antd.TableButton type="primary">新增</Antd.TableButton>
            <Antd.TableButton type="default">生成</Antd.TableButton>
            <Table rowSelection={rowSelection}
                columns={columns}
                dataSource={tableData}
                bordered
                pagination={pagination}/>
        </>
    )
}

export default View;
