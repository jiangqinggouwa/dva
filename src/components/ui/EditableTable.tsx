import React, { useState } from "react";
import { Form, Input, Button, Card, Table } from "antd";

const EditableTable = () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
    const columns = [
        {
            title: "字段名",
            dataIndex: "name",
        },
        {
            title: "中文名",
            dataIndex: "real_name",
        },
        {
            title: "类型",
            dataIndex: "type",
        },
        {
            title: "是否主键",
            dataIndex: "is_pk",

        },
        {
            title: "是否为空",
            dataIndex: "is_null",
        },
        {
            title: "是否为外键",
            dataIndex: "is_fk",
        },
        {
            title: "默认值",
            dataIndex: "default",
        },
        {
            title: "是否枚举",
            dataIndex: "is_enum",
        },
        {
            title: "排序条件",
            dataIndex: "can_order",
        },
        {
            title: "where条件",
            dataIndex: "can_where",
        },
        {
            title: "别名",
            dataIndex: "where_name",
        },
        {
            title: "字符集",
            dataIndex: "charset",
        },
        {
            title: "注释",
            dataIndex: "comment",
        },
        {
            title: "操作",
            dataIndex: "option",
            width: 120,
            render() {
                return (
                    <span>
                        <a onClick={()=>this.props.dispatch({ type: 'field/setVisible', payload: true})}>编辑</a>>
                        <a href="" className="margin-left-12">删除</a>
                    </span>
                )
            }
        }
    ];
    const tableData = [];
    for (let i = 0; i < 5; i++) {
        tableData.push({
            key: i,
            name: `字段 ${
                i + 1
                }`,
            real_name: `字段中文名 ${
                i + 1
                }`,
            is_pk: "true",
            is_fk: "true",
            is_null: "true",
            is_enum: "true",
            can_order: "id",
            can_where: `id`,
            where_name: `字段名`,
            charset: `---`,
            comment: `-----`

        })
    }
    const getFields = () => {
        const count = expand ? 10 : 6;
        const children = [
            {
                title: "表名："
            },
            {
                title: "中文名："
            },
            {
                title: "是否外键："
            },
            {
                title: "是否逻辑删除："
            }, {
                title: "是否基于时间："
            }, {
                title: "注释："
            }
        ];
    }
    return (
        <Table 
            className="feild-table" 
            columns={columns} 
            dataSource={tableData} 
            bordered 
            pagination={false}
        />
    )
}
export default EditableTable