import { routerRedux } from 'dva'
export default ({
    namespace: 'field',
    state: {
      visible: false,

    },

    subscriptions: {
      },
    
      effects: {


       
      },
    
      reducers: {
        setVisible(state, {  payload }) {
          console.log('feildstate'+payload)
         return {
           ...state,
           visible: payload,
         }
        }
        
      }
    })