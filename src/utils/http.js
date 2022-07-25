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
    return Promise.reject(error)
})

export default service