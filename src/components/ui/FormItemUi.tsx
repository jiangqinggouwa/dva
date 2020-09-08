import React, { Component } from 'react';
import { Form, Input, Button, Space, Checkbox, Select, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


export interface Rule {
    required?: boolean,
    message?: string
}
export interface Item {
    label?: string,
    name?: string,
    inputType?: string,
    rules?: Rule[],
}
export interface PropsType {
    ItemData?: Item[],
    form?: any,
    row?: number,
    col?: number
}

const formItemLayout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 24 },
  };
  const formTailLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19, offset: 1 },
  };

class FormItemUi extends Component <PropsType>{
    constructor(props: PropsType) {
        super(props)
    
    }    

    render() {
        const { ItemData, form, row, col } = this.props
        return (
            <div>
                <Form
                    {...formItemLayout}
                    name="basic"
                    form = { form }
                    initialValues={{ remember: true }}
                >
                    <Row gutter={row}>
                        {
                            ItemData.map((value,key) => (
                                <Col span={col}>
                                    <Form.Item {...formTailLayout} key={key} label={value.label} name={value.name} rules={value.rules}>
                                        { value.inputType === 'string'?<Input/>:<Select/>}
                                    </Form.Item>
                                </Col>
                            ))
                        }
                    </Row>
                    
                </Form>                
            </div>
        )
    }
};   

export default FormItemUi

