import { routerRedux } from 'dva'
export default ({
    namespace: 'count',
    state: 0,

    subscriptions: {
        setup({ dispatch, history }) {
          history.listen(({pathname})=> {
            if(pathname === '/products') {
               console.log(history)
            }
          })
        },
      },
    
      effects: {
        *redirect({ payload }, { put }) {
          // eslint-disable-line
            yield put(routerRedux.push('/products', {name: 'dkvirus'}));
          },
      },
    
      reducers: {
        add  (count: number) { return count + 1 },
        minus(count: number) { return count - 1 }
      }
    })