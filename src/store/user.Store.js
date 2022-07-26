// login module

import {makeAutoObservable, runInAction} from 'mobx'

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
        // this.userInfo = res.list
        // 异步方法赋值： 第一种
        runInAction(() => {
            this.userInfo = res.list
        })
        // 第二种
        // this.setUserInfo(res.list)
    }

    setUserInfo = (value) => {
        this.userInfo = value
    }
}

export default LoginStore