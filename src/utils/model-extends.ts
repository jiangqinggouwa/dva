// utils/model-extend.js
const enhanceClear = (param) => {
    const { reg, clearReducer } = param;
    if (reg && clearReducer) {
      const clearWrapped = (subscriber) => { // 包装clearWrapped
        return (props) => {
          const { dispatch, history } = props;
          history.listenBefore(({ pathname }) => { // 监听跳转前的动作
            const isout = reg.test(history.getCurrentLocation().pathname)
                  && !reg.test(pathname);
            isout && dispatch(clearReducer);
          });
          subscriber({ ...props });
        };
      };
      return (model) => {
  　　　　if (!model.subscriptions) model.subscriptions = { setup() {} };
  　　　　model.subscriptions.setup = clearWrapped(model.subscriptions.setup || (() => {}));
  　　　　return model;
      };
    }
    return model => model;// 若没有相应参数，则返回原数据函数
  };
  
  const enhanceItems = {
    enhanceClear,
  };
  export const enhanceModel = (param) => {
    const enhanceFuns = [];
    Object.keys(param).forEach((key) => {
      enhanceItems[key] && enhanceFuns.push(enhanceItems[key](param[key]));
    });
    return (model) => {
      if (enhanceFuns.length === 0) return model;
      return enhanceFuns.reduce((newModel, fun) => {
        return (typeof fun === 'function') ? fun(newModel) : newModel;
      }, model);
    };
  };
  