import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import AuthComponent from './components/AuthComponent';

import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'
function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}

export default App;
