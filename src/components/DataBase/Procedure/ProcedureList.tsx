import React, { Component } from 'react';
import {Table, Popconfirm, Button} from 'antd';
import ProcedureModal from './ProcedureModal'
import { connect, Dispatch } from 'dva';

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

export interface PropsType {
    dispatch: Dispatch,
    
}

 class ProcedureList extends Component <PropsType>{
     constructor(props:PropsType) {
         super(props)
     };
    create = () => {
        this.props.dispatch({
            type: "procedure/setVisible", 
            payload: {visible:true,title:"新建"}
        })
    };
    render() {
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
    
        return (
            <>
                <div className="margin-bottom-16">
                    <Button type="primary" onClick={this.create}>
                    新增
                    </Button>
                    <Button type="default" className="margin-left-8">生成</Button>
                </div>
                <Table 
                    columns={columns}
                    dataSource={tableData}
                    bordered
                />
                <ProcedureModal visible title={''} />
            </>
        )
    }
}

export default connect((procedure)=>(procedure)

)(ProcedureList)
