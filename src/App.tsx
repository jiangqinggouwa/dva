import React from "react";
import { router } from 'dva';
import Main  from  '@components/Main/Main';
import Dashboard from '@components/Dashboard'
import FieldList from '@components/DataBase/Field/FieldList';
import ViewList from '@components/DataBase/View/ViewList';
import FieldItem from '@components/DataBase/Field/FieldItem';
import ProcedureList from '@components/DataBase/Procedure/ProcedureList';
import TriggerList from '@components/DataBase/Trigger/TriggerList';
import User from '@components/User/User'


const { Router, Route, Switch, Link } = router;

const App = ({ history }) => {
  return (
    <Router history={history}>
        <Main>
          {/* <Route path="/" exact component={Dashboard} /> */}
          <Route path="/" exact component={FieldList} />
          <Route path="/item"  exact component={FieldItem} />
          <Route path="/view"  exact component={ViewList} />
          <Route path="/procedure"  exact component={ProcedureList} />
          <Route path="/trigger"  exact component={TriggerList} />
          <Route path="/users"  exact component={User} />
        </Main>
    </Router> 
  );
}
export default App
