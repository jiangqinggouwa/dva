import React, { Component } from 'react';
import { Table, Button } from 'antd';
import { connect, router } from 'dva';
import * as data from '@data/formItem.data'
const { Link } = router;

const columns = (that) => [
    {
        title: '表名',
        dataIndex: 'name',
    },
    {
        title: '中文名',
        dataIndex: 'real_name',
    },
    {
        title: '是否主键',
        dataIndex: 'fk_enable',
    },
    {
      title: '是否基于时间',
      dataIndex: 'has_timestamp',

  },
    {
        title: '是否逻辑删除',
        dataIndex: 'is_logically_delete',
    },
    {
        title: '注释',
        dataIndex: 'comment',
    },
   {
        title: '操作',
        dataIndex: 'option',
        render(that) {
            return (
                <span>
                    <Link to="/item" onClick={()=>that.props.dispatch({type: "menu/change", payload: {path:"item", title: "编辑"}})}>编辑</Link>
                        <a href=""> 删除</a>
                </span>
            )
        }
    }
];

const tableData = [];
for (let i = 0; i < 10; i++) {
    tableData.push({
        key: i,
        name: `table ${
            i + 1
        }`,
        real_name: `数据表 ${
          i + 1
      }`,
        fk_enable: `true`,
        has_timestamp: `true`,
        is_logically_delete: `true`,
        comment: `-----`,
        
    })
}

class FieldList extends Component <any>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <div className="margin-bottom-16">
                    <Button type="primary" >
                        <Link to="/item" onClick={()=>this.props.dispatch({type: "menu/change", payload: {path:"item", title: "新增"}})}>新增</Link>
                    </Button>
                    <Button type="default" className="margin-left-8">生成</Button>
                </div>
                <Table
                 columns={columns(this)}
                 dataSource={tableData}
                />
            </>
        )
    }
}
export default connect()(FieldList)


