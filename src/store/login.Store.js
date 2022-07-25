// login module

import {makeAutoObservable} from 'mobx'

import {service} from '@/utils'
import { getToken, setToken, removeToken } from '@/utils/token'

class LoginStore {
    token = getToken() || ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }

    login = async ({username, password}) => {
        // 调用登录接口， 存储token
        const res = await service.post('/api/v1/login', {
            phone: username,
            password
        })
        console.log(res);
        this.token = res.token
        // token传入ls
        setToken(this.token)
    }

    logout = () => {
        this.token = ''
        removeToken()
    }
}

export default LoginStore