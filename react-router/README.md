# React + Vite

# 安装、使用路由
    1. 安装依赖：npm install react-router-dom
    2. 导入：import { BrowserRouter} from "react-router-dom";
    3、使用： 
##      APP.jsx
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
##        main.jsx
        <BrowserRouter>
            <App />
        </BrowserRouter>



# 以及路由
# 嵌套路由（多层路由的嵌套）
# useRoutes 将路由抽离出来，单独写一个文件
# 路由参数传递
# 等装高阶组件（HOC） 模拟路由拦截器  
# 组件异步加载（懒加载）


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
