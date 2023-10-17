import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHeader from "./Header";

import { Layout, theme } from "antd";

const { Content } = Layout;
const Loginlayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Layout>
        <MyHeader isLogin={true} collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Loginlayout;
