import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/*
  路由懒加载 ，使用 react里的 lazy 和 Suspense 组件完成
 */
import AuthComponent from './components/AuthComponent';
import { lazy, Suspense } from 'react'
// 按需导入组件
const Layout = lazy(() => import('./pages/Layout'))
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Article = lazy(() => import('./pages/Article'))
const Publish = lazy(() => import('./pages/Publish'))


// import Layout from './pages/Layout'
// import Login from './pages/Login'


// import Home from '@/pages/Home'
// import Article from '@/pages/Article'
// import Publish from '@/pages/Publish'
function App() {
  return (
    <Router>
      <div className="App">
        {/*加一个 Suspense 标签做loading */}
        <Suspense
          fallback={
            <div>
              loading
            </div>
          }
        >
        <Routes>
          {/* Layout 需要做鉴权处理 */}
          <Route path="/" element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>
            {/* 配置二级路由 */}
            <Route index element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/publish" element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
