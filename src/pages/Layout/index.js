import React from 'react'
import './index.scss'
import { Layout, Menu, Popconfirm } from 'antd';
import { HomeOutlined, DiffOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {useStore} from '@/store'
import {useEffect} from 'react'
import {observer} from 'mobx-react-lite'
const { Header, Content, Sider } = Layout;
const routes = [
    {
        path: '/',
        title: '数据概览',
        icon: HomeOutlined
    },
    {
        path: '/article',
        title: '内容管理',
        icon: DiffOutlined
    },
    {
        path: '/publish',
        title: '发布文章',
        icon: EditOutlined
    }
]
const items = routes.map(item => {
    return {
        key: item.path,
        icon: React.createElement(item.icon),
        label: <Link to={item.path}>{item.title}</Link>,
    };
});
function GeekLayout() {
    const location = useLocation()   // 这个路由中的hooks方法，获取当前路由的参数的
    // console.log(location);       // 有 hash、pathname、search、 state 等
    const { userStore, loginStore } = useStore()
    useEffect(() => {
        // 在这里调接口， 副作用函数, 传 空数组， 只在加载时执行一次
        userStore.getUserInfo()
    }, [])

    const navigate = useNavigate()
    // 退出登录 ，清除token
    const confirm = () => {
        loginStore.logout()
        navigate('/login')
    }
  return (
    <Layout>
      <Header className="header">
        <div>
            Logo
        </div>
        <div className='user-info'>
            <span className='user-name'>{userStore.userInfo.username}</span>
            <span className='user-logout'>
                <Popconfirm 
                    onConfirm={confirm}
                    title="是否确认退出" okText="退出" cancelText="取消">
                    <LogoutOutlined /> 退出
                </Popconfirm>
            </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>
        <Layout
            className='layout-content'
          style={{
            padding: '24px',
          }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

// 这里使用observer 连接，为了完成响应式，数据更新后视图也更新
export default observer(GeekLayout)
