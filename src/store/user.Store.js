// login module

import {makeAutoObservable} from 'mobx'

import {service} from '@/utils'

class LoginStore {
    userInfo = {}
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }

    getUserInfo = async () => {
        // 调用接口，获取登录信息
        const res = await service.post('/api/v1/userInfo')
        console.log(res);
        this.userInfo = res.list
    }
}

export default LoginStore