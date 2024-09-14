// 项目的入口 从这里开始

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

// 导入项目的根组件
import App from './App';
import Zujian from './Zujian';
import Style from './Style';
import FormTest from './FormTest'

// 把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// 把App根组件渲染到id为rooa的dom节点上
const rooa = ReactDOM.createRoot(document.getElementById('rooa'));
rooa.render(<Zujian />);

// 把App根组件渲染到id为roob的dom节点上
const roob = ReactDOM.createRoot(document.getElementById('roob'));
roob.render(<Style />)

// 把App根组件渲染到id为roob的dom节点上
const formtest = ReactDOM.createRoot(document.getElementById('formtest'));
formtest.render(<FormTest />)