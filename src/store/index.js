// 模块处理，统一导出
import LoginStore from "./login.Store";
import React from 'react'

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
    }
}

// 实例化根

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export {useStore} 
