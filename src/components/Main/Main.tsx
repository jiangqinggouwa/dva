import React, {Component, ReactChildren} from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderMenu from './SiderMenu';
import { connect } from 'dva';

const { Header, Content, Footer, Sider } = Layout;

export interface PropsType {
  children?: ReactChildren,
  title?: string
}

class Main extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props)
  }
  
  render() {
    const { title, children } = this.props;
    return (

      <Layout>
        <Header className="padding-left-24">
          <div className="title color-white" >CodeGenerator</div>
        </Header>
        <Layout>
          <Sider className="bg-white">
              <SiderMenu />
          </Sider>
          <Layout className="padding-left-24">
            <Breadcrumb className="margin-top-16">{title}</Breadcrumb>
            <Content className="site-layout-background">{children ||'Content'}</Content>
            <Footer className="align-center">@@copy right</Footer>
          </Layout>
        </Layout>
    </Layout>

    )
  }
}



export default connect(({menu}:any)=>({title:menu.title}))(Main);
