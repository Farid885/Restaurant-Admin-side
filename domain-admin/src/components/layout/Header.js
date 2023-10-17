import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button, theme } from "antd";

const { Header } = Layout;

function MyHeader(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { setCollapsed, collapsed,isLogin } = props;
  return (
    <div >
      <Header
        style={{
        
          padding: 0,
          background: colorBgContainer,
        }}
      >
        {!isLogin?
        <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      /> : '' }
      </Header>
    </div>
  );
}

export default MyHeader;
