import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

import { Layout,  theme } from "antd";
import Sidebar from "./Sidebar";
const {  Content } = Layout;
const MyLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="" >
    
      <Sidebar 
      collapsed={collapsed}
      setCollapsed={setCollapsed}
      />
      <Layout>
        <Header isLogin={false} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "0px 0px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
          >
         
          
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
