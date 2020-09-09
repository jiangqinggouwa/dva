import dva from 'dva';
import {createBrowserHistory as createHistory} from "history"
import App from './App';
import siderModel from '@models/Sider/sider.models';
import fieldModel from '@models/Field/field.models';
import procedureModel from '@models/Procedure/procedure.models'
import users from '@models/users'
import '@assets/global.css';


const app = dva({
    history: createHistory(),
});


// app.use({
//     extraEnhancers: [
//         persistEnhancer({
//             key: 'model',
//             storage
//         })
//     ],
// });

app.model(siderModel as any);
app.model(fieldModel as any);
app.model(procedureModel as any);
app.model(users as any);

app.router(App);

app.start('#root');
