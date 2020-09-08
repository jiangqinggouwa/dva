import React from 'react';
import {Table, Popconfirm, Button} from 'antd';
import {PAGE_SIZE} from '@utils/constants';
import * as Antd from '@assets/styled.antd';

function Procedure() {
    const columns = [
        {
            title: '存储过程名',
            dataIndex: 'name'
        },
        {
            title: '中文名',
            dataIndex: 'real_name'
        },
        {
            title: '查询类型',
            dataIndex: 'query_type'
        },
        {
            title: 'sql语句',
            dataIndex: 'procedure_stmt',
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
            name: `procedure ${
                i + 1
            }`,
            real_name: `存储过程 ${
                i + 1
            }`,
            query_type: `select`,
            procedure_stmt: `selectn * from student`,
            comment: `存储过程查询语句`
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
            console.log('Current: ', current, '; PageSize: ', PAGE_SIZE)
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

export default Procedure;
