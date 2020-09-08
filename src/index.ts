import dva from 'dva';
import {createBrowserHistory as createHistory} from "history"
import App from './App';
import siderModel from '@models/Sider/sider.models';
import fieldModel from '@models/Field/field.models';
import { persistEnhancer } from 'dva-model-persist';
import storage from 'dva-model-persist/lib/storage';
import { enhanceModel } from "@utils/model-extends";
import '@assets/global.css';


const app = dva({
    history: createHistory(),
});


app.use({
    extraEnhancers: [
        persistEnhancer({
            key: 'model',
            storage
        })
    ],
});

app.model(siderModel as any);
app.model(fieldModel as any);
enhanceModel({
    enhanceClear: {
      reg: /\/detail/,
      clearReducer: { type: 'clearDetail' },
    },
  })(app.model)

app.router(App);

app.start('#root');
