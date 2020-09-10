import { Effect , Subscription } from 'dva'
import { Reducer } from 'redux';
import getRemoteList from '@services/users'

interface UserModalType {
  namespace: 'users';
  state:{},
  reducers:{
    getList: Reducer
  },
  effects:{
    getRemote: Effect,
    edit: Effect,
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
      console.log(payload)
      return payload
    }
    
  },
  effects: {
    *getRemote({payload},{call,put,select}){
      const data = yield call(getRemoteList)  
      console.log('parse'+JSON.parse(data))
      yield put({
        type: "getList",
        payload: JSON.parse(data)//对象
      })
    },

    *edit({payload}, {call,put}) {
      console.log(payload)
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