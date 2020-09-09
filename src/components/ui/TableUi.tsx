// import React, { Component } from 'react';
// import {Table, Popconfirm, Button} from 'antd';

// const tableData = [];
// for (let i = 0; i < 10; i++) {
//     tableData.push({
//         key: i,
//         name: `procedure ${
//             i + 1
//         }`,
//         real_name: `存储过程 ${
//             i + 1
//         }`,
//         query_type: `select`,
//         procedure_stmt: `selectn * from student`,
//         comment: `存储过程查询语句`
//     })
// }

// export interface Item {
//     key: string;
//     name: string;
//     age: number;
//     address: string;
//   }

//  class TableUi extends Component <PropsType>{
//      constructor(props:PropsType) {
//          super(props)
//      };
//      rowSelection = {
//         onChange: (selectedRowKeys, selectedRows) => {
//             console.log('selectedRowKeys changed: ', selectedRowKeys)
//             console.log(selectedRowKeys)
//         }
//     };
//     create = () => {
//         console.log('111111')
//         this.props.dispatch({
//             type: "field/setVisible", 
//             payload: true
//         })
//     };
//     render() {
//         const columns = [
//             {
//                 title: '存储过程名',
//                 dataIndex: 'name'
//             },
//             {
//                 title: '中文名',
//                 dataIndex: 'real_name'
//             },
//             {
//                 title: '查询类型',
//                 dataIndex: 'query_type'
//             },
//             {
//                 title: 'sql语句',
//                 dataIndex: 'procedure_stmt',
//             },
//             {
//                 title: '注释',
//                 dataIndex: 'comment'
    
//             }, 
//             {
//                 title: '操作',
//                 dataIndex: 'option',
//                 render() {
//                     return (
//                         <span>
//                             <a>编辑</a>
//                             <Popconfirm title="Confirm to delete?">
//                                 <a href="">
//                                     删除</a>
//                             </Popconfirm>
//                         </span>
//                     )
//                 }
//             }
//         ];
    
//         return (
//             <>
//                 <Table rowSelection={this.rowSelection}
//                     columns={columns}
//                     dataSource={tableData}
//                     bordered
//                 />
//             </>
//         )
//     }
// }

// export default TableUi
