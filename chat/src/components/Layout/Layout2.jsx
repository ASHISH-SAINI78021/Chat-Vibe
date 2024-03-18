import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatButton } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  LoginOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Nav from '../pages/Nav/Nav';
import { useAuth } from '../context/auth';
import Modal2 from './Modal2';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children , onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick
  };
}

const Layout2 = ({children}) => {
  const [collapsed, setCollapsed] = useState(true);
  const [auth , setauth] = useAuth();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = ()=> {
    localStorage.removeItem("auth");
    setauth({
      ...auth ,
      user : null ,
      token: null
    });
    navigate('/logout');
  }

  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Group', 'sub2', <TeamOutlined />, [
      // getItem('Team 1', '6', null, null, () => { /* Your callback function for Team 1 */ }),
      // getItem('Team 2', '8', null, null, () => { /* Your callback function for Team 2 */ }),
      getItem('New Group Chat', 'newGroupChat', null, null, () => { setIsModalOpen(true);}),
    ]),
    getItem('About Us', 'sub3', <UserOutlined />, [
      getItem('About us', '9' , null , null , ()=> {navigate("/dashboard/about")}),
      getItem('Contact us', '10' , null , null , ()=> {navigate("/dashboard/contact")}),
      getItem('Privacy policy', '11' , null , null , ()=> {navigate("/dashboard/privacy")}),
    ]),
    getItem('Files', '12', <FileOutlined /> ),
    getItem('Logout', '14', <LogoutOutlined /> , null , handleLogout),
    getItem('Add new account', '15', <UserAddOutlined /> , null , ()=> {navigate("/signup")}),
  ];
  

  

  
  return (
    <Layout
      style={{
      minHeight: '100vh',
    }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{backgroundColor:"#1c1b19"}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'fixed', // Add this to make the Header fixed
            width: '100%', // Add this to make the Header full-width
            zIndex:-1
          }}
        />
        <Content
          
        >
          <p style={{textAlign:"center" , paddingRight:"15rem"}}>
        
          </p>-
          <Modal2 isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          <Nav/>
          <div
            style={{
              
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              backgroundColor:"#1c1b19"
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
      <FloatButton.BackTop />
    </Layout>
  );
};
export default Layout2;