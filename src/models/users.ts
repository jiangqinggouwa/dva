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
      console.log(payload)
      return payload
    }
    
  },
  effects: {
    *getRemote({payload},{call,put,select}){
      const data = yield call(getRemoteList)  
      console.log(data.data)
      yield put({
        type: "getList",
        payload: data.data//对象
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