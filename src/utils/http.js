import axios from 'axios'

const service = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/304897',
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})


// 响应拦截器
service.interceptors.response.use(response => {
    return response.data
}, error => {
    // 对错误响应做点什么
    if(error.response.status === 401) {    // 401表示token错误 登录失效
        // 跳回登录，或者跳转到 400 页面等，
        // react-router 并不像 vue-router具有实例，所以react-router版本 默认状态下并不支持组件之外的路由跳转
        /*
            需要自己写： 先安装 history 包
            import { createHashHistory,createBrowserHistory } from 'history'; // 引入 createHashHistory
            // 这里根据路由 hash 或 history 进行调用 createHashHistory()，createBrowserHistory()
            const history = createHashHistory();  // 调用 createHashHistory
            history.push('/login');   // 第一种跳转方式

            v6 需要在 App 里这样写
            import { createBrowserHistory } from 'history'; 
            import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom
            const history = createBrowserHistory();  
            function App() {
                return (
                    // 传参方式使用，先要去配置， HistoryRouter替换掉 App 里的 BrowserRouter
                    <HistoryRouter history={history}>
                        // 自己的路由组件
                    </HistoryRouter>
                )
            }
            // 在axios 里使用
            history.push('/login');
        */
    }
    return Promise.reject(error)
})

export default service