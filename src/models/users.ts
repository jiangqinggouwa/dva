import { Effect , Subscription } from 'dva'
import { Reducer } from 'redux';
import userServices from '@services/users'
interface UserModalType {
  namespace: 'users';
  state:{},
  reducers:{
    getList: Reducer
  },
  effects:{
    getRemote: Effect
  },
  subscriptions: {
    setup: Subscription
  }
}
const UsersModel : UserModalType = {
  namespace: "users",
  state: []
,  reducers: {
    getList(state,{payload}){
      return payload
    }
    
  },
  effects: {
    *getRemote({payload},{call,put,select}){
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
      yield put({
        type: "getList",
        payload: data
      })
    }

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return  history.listen(({ pathname }) => {
          if (pathname === '/users') {
            dispatch({
              type: 'getRemote',
            });
            }
          }
      )
    }
  }
}

export default UsersModel