// 模块处理，统一导出
import LoginStore from "./login.Store";
import React from 'react'

import UserStore from './user.Store'

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
        this.userStore = new UserStore()
    }
}

// 实例化根

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export {useStore} 
