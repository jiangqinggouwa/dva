import { routerRedux } from 'dva'
export default ({
    namespace: 'menu',
    state: {
      path:'',
      title:'',
      key:'',

    },

    subscriptions: {
      },
    
      effects: {


       
      },
    
      reducers: {
        change(state, {  payload }) {
          console.log('state'+payload)
         return {
           ...state,
           title: payload.title || payload,
           path: payload.path || payload
         }
        }
        
      }
    })