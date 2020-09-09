import { routerRedux } from 'dva'
export default ({
    namespace: 'procedure',
    state: {
      visible: false,
      title:''

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
           visible: payload.visible||payload,
           title: payload.title||payload,
         }
        }
        
      }
    })