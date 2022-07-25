import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 引入antd样式 , 需要引入 min 文件， 不然会报错路径错误
import 'antd/dist/antd.min.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

