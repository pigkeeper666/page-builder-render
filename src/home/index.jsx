
import { useState } from 'react'
import { Layout, Menu, Breadcrumb, Avatar, PageHeader, Button } from 'antd';
import { useHistory } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import PageManager from './PageManage'
import icon from '../public-assets/icon.png'
import styles from './index.module.scss'

const { Content, Sider, Footer } = Layout;

const MENU_INFO = [
  {
    key: 'page',
    label: '页面管理',
    icon: <PieChartOutlined />,
  },
  {
    key: 'datasource',
    label: '数据源管理',
    icon: <DesktopOutlined />,
  }
]

const Home = (props) => {
  const { loginInfo } = props
  const history = useHistory()
  const [current, setCurrent] = useState('page')

  const handleMenuChange = ({ key }) => {
    setCurrent(key)
  }

  const handleLogOut = () => {
    history.push('/login')
    window.localStorage.removeItem('pig_jwt_token')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className={styles['logo']} >
            <img src={icon} height={64}/>
          </div>
          <Menu 
            theme="dark"
            defaultSelectedKeys={[current]}
            onClick={handleMenuChange}
            mode="inline"
          >
            {MENU_INFO.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <PageHeader
            onBack={handleLogOut}
            key="pppa"
            ghost={false}
            title="前端页面搭建器后台"
            subTitle="Page Builder formed by MrPiggy"
            extra={[
              <Avatar key="ava" size="large" icon={<UserOutlined />} style={{ marginRight: 8 }}/>,
            ]}/>
          <Content style={{ margin: '16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {current === 'page' ? <PageManager /> : null}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}

export default Home