// 持久化存储token

const key="Auth-KEY"

const setToken = (token) => {
    return window.localStorage.setItem(key, token)   // 这个返回时表示成功与否
}

const getToken = () => {
    return window.localStorage.getItem(key)
}

const removeToken = () => {
    return window.localStorage.removeItem(key)
}

export {
    setToken,
    getToken,
    removeToken
}