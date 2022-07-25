import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import AuthComponent from './components/AuthComponent';
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
          }></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
