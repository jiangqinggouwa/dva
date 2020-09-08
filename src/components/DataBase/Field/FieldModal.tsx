import React, { Component } from 'react';
import ModalUi from '@components/ui/ModalUi';
import FormItemUi from '@components/ui/FormItemUi';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import * as data from '@data/formItem.data'


interface FieldProps {
    visible: boolean;
    dispatch: Dispatch;
}

class FieldModal extends Component <FieldProps>{
    constructor(props: FieldProps) {
        super(props)
    };
    
    setVisible = (value: boolean) => {
        this.props.dispatch({
            type: "field/setVisible",
            paylpad: value
        })
    }
    render() {
        const { visible } = this.props
        return (
                <ModalUi 
                    show={ visible }
                    handleCancel={() => this.setVisible(false) }  
                    handleOk={ ()=>this.setVisible(false) }
                >
                    <FormItemUi ItemData={data.fieldItemData} row={24} col={24}/>
                </ModalUi>
        )
    }
};
export default connect(
    ({field}:any)=>({
        visible: field.visible
    })    
)(FieldModal)