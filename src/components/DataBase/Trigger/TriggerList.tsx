import React from 'react';
import {Table, Popconfirm, Button} from 'antd';
import * as Antd from '@assets/styled.antd';

function Trigger() {
    const columns = [
        {
            title: '名称',
            dataIndex: 'name'
        },
        {
            title: '中文名',
            dataIndex: 'real_name'
        },
        {
            title: '触发表类型',
            dataIndex: 'table_type'
        },
        {
            title: '数据库表',
            dataIndex: 'table_id'
        },
        {
            title: '视图表',
            dataIndex: 'view_id'
        },
        {
            title: '查询类型',
            dataIndex: 'query_type'
        },
        {
            title: '是否前触发',
            dataIndex: 'is_before'
        },
        {
            title: 'sql语句',
            dataIndex: 'trigger_stmt'
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
            name: `trigger ${
                i + 1
            }`,
            real_name: `触发器 ${
                i + 1
            }`,
            table_type: 'table',
            table_id: '数据表1',
            view_id: '视图',
            query_type: 'update',
            is_before: 'false',
            trigger_stmt: 'update count from student',
            comment: `触发器`
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

export default Trigger;
