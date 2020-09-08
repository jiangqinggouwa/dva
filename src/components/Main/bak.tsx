// const SiderMenu : FC<{}> = ({props,dispatch,router,handleClick}:any) => {
//     console.log("props",props,router.location.pathname.split('/')[1]);
    
//     return (
//         <Menu 
//          theme="light"
//          defaultSelectedKeys={[router.location.pathname.split('/')[1]]}
//          mode="inline"
//         >
//             <SubMenu 
//              key="dataBase"
//              title={<span><PieChartOutlined/>数据库</span>}>
//                 <Menu.Item key="table"><Link to="/table">数据表</Link>
//                 </Menu.Item>
//                 <Menu.Item key="view">
//                 <Link to="/view" onClick={()=>dispatch({type: "menu/change", payload: "数据库视图"})}>数据库视图</Link>
//                 </Menu.Item>
//                 <Menu.Item key="procedure">
//                     <Link to="/procedure" onClick={()=>dispatch({type: "menu/change", payload: "存储过程"})}>存储过程</Link>
//                 </Menu.Item>
//                 <Menu.Item key="trigger">
//                     <Link to="/trigger" onClick={()=>dispatch({type: "menu/change", payload: "触发器"})}>触发器</Link>
//                 </Menu.Item>
//             </SubMenu>
//             <SubMenu key="entityClass"  title={<span>实体类</span>}/>
//             <SubMenu key="mappingClass" title={<span>映射类</span>}/>
//             <SubMenu key="serviceClass" title={<span>服务类</span>}/>
//             <SubMenu key="console"      title={<span>控制器</span>}/>
//             <SubMenu key="others"       title={<span>其他</span>}>
//                 <Menu.Item key="setRole">
//                     <Link to="/setRole">角色设定</Link>
//                 </Menu.Item>
//                 <Menu.Item key="setToken">
//                     <Link to="/setToken">Token设定</Link>
//                 </Menu.Item>
//                 <Menu.Item key="setRoot">
//                     <Link to="/setRoot">权限设定</Link>
//                 </Menu.Item>
//                 <Menu.Item key="map">
//                     <Link to="/setToken">默认映射函数</Link>
//                 </Menu.Item>
//             </SubMenu>
//         </Menu>

//     )
// }
