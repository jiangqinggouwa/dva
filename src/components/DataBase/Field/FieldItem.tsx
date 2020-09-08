import React, { Component } from 'react'
import { Card, Button, Row, Col, Input, Form } from 'antd'
import { routerRedux, connect } from 'dva'
import EditableTable from '@components/ui/EditableTable'
import FieldModal from './FieldModal'
import FormItemUi from "@components/ui/FormItemUi";
import * as data from "@data/formItem.data";

class FieldItem extends Component<any>{
    constructor(props: any) {
        super(props)
        console.log('field'+props)
    }
    createHandler = ({ values }) => {
        this.props.dispatch({
            type: 'users/create',
            payload: values
        })
    };

    render() {
        const { dispatch } = this.props
        return (
            <div>
                <Card title="表结构"
                    extra={
                        <>
                            <Button type="primary" className="button-right">保存</Button>
                            <Button onClick={() => this.props.history.go(-1)}>返回</Button>
                        </>
                    }
                >
                    <FormItemUi ItemData={data.fieldData} row={24} col={8}/>
                    <div className="field">
                        <Button 
                            type="primary" 
                            className="" 
                            onClick={()=>dispatch({ type: 'field/setVisible', payload: true})}
                        >
                            新增
                        </Button>
                        <FieldModal/>
                        <EditableTable />
                    </div>
                </Card>
            </div>
        )
    }
}

export default connect()(FieldItem)
