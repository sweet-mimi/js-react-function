// 路由鉴权： 封装高阶组件
// 判断token存在，来判定是否登录

import { getToken } from '@/utils/token'
import React from 'react'
import {Navigate} from 'react-router-dom'

function AuthComponent({children}) {    // 传值为子组件
    const token = getToken()
    if(token) {
        return (
            <>{children}</>
        )
    }else {
        // 这里的 Navigate 是重定向组件，代替以前的 Redirect 组件, replace是取消路由历史记录
        return <Navigate to="/login" replace></Navigate>
    }
 
}

export default AuthComponent