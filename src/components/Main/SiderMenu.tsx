import React, {Component } from 'react';
import {Menu} from 'antd';
import {router, connect, Dispatch} from 'dva';
import menuData from '@data/menu.data';

const SubMenu = Menu.SubMenu;
const {Link} = router

export interface PropsType {
    dispatch?: Dispatch,
    title?: string,
    path?: string

}

class SiderMenu extends Component <PropsType>{
    constructor(props:PropsType) {
        super(props)
        
    };
    handleClick = e => {
        console.log('click ', e);
      };

    render() {
        const dataKey = menuData[0].key
        const { dispatch,path } = this.props;
        console.log('key'+dataKey)
        console.log('path'+path.split('/'))
        return (
            <Menu 
                className="height-100"
                theme="light"
                defaultOpenKeys={[dataKey]}
                defaultSelectedKeys={[path.split('/')[1]]}
                onClick={this.handleClick}
                mode="inline">
                {
                    menuData.map((value, index) => {
                        console.log(value.children)
                        if(value.children) {
                            return (
                                <SubMenu key={value.key} title={value.title}>
                                    {
                                        value.children.map((data,key)=>{
                                            return( 
                                            <Menu.Item key={data.key}>
                                                <Link to={data.path} onClick={()=>dispatch({type: "menu/change", payload: {title:`${data.title}`, path:`${data.path}`}})}>{data.title}</Link>
                                            </Menu.Item>
                                        )})
                                    }
                                </SubMenu>
                            )}
                        else {
                            return (
                                <Menu.Item key={value.key}>
                                    {value.title}
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}




export default connect(
    ({menu}:any)=>({
        title: menu.title,
        path: menu.path
    }))
(SiderMenu);
