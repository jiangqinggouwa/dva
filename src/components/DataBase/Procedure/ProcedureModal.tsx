import React, { Component } from 'react';
import ModalUi from '@components/ui/ModalUi';
import FormItemUi from '@components/ui/FormItemUi';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import * as data from '@data/formItem.data'

interface PropsType {
    visible: boolean;
    dispatch: Dispatch;
    title: string;
}

class ProcedureModal extends Component <PropsType>{
    constructor(props: PropsType) {
        super(props)
    };
    
    setVisible = (visible:boolean,title:string) => {
        console.log('11111')

        this.props.dispatch({
            type: "procedure/setVisible",
            paylpad: { visible:{visible}, title:{title}}
        })
    }
    render() {
        console.log(this.props.dispatch)
        const { visible,title,dispatch } = this.props
        return (
                <ModalUi 
                    title={title}
                    show={ visible }
                    handleCancel={ ()=>this.setVisible(false,'') } 
                    handleOk={ ()=>this.setVisible(false,'') }
                >
                    <FormItemUi ItemData={data.fieldItemData} row={24} col={24}/>
                </ModalUi>
        )
    }
};
export default connect()(ProcedureModal)