import React from 'react';
import styled from 'styled-components';
import { Button, Layout, Menu } from 'antd'

const { Header, Sider } = Layout

export const LayoutHeader = styled(Header)`
  width: 100%;
  background-color: white;
  padding: 0 ;
  border-bottom: 1px solid #eee;
`;
export const LayoutSider = styled(Sider)`
  min-height: 920px;
  background-color: balck;
`;
export const H1 = styled.h1`
  display: block;
  font-size: 20px;
  text-align: center;
  height: 64px;
  line-height: 64px;
  background-color: black;
  color: white;
`;
export const  SettingMenu= styled(Menu)`
  float: right;
  height: 63px;
`;
export const TableButton = styled(Button)`
    margin-right:8px;
    margin-bottom:16px;
`
