import { Menu } from "antd";
import { Link,  } from "react-router-dom";
import "../../assets/scss/main.scss";
import {
  UsergroupAddOutlined,
  SolutionOutlined,
  FileDoneOutlined,
 
  BorderlessTableOutlined,
  ReadOutlined,
} from "@ant-design/icons";

import { MenuOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Menulist() {
  return (
    <div className="">
      <Menu mode="inline" theme="dark"  className="  menu-ul" defaultSelectedKeys={"1"}>
       

          <Menu.Item key="2">
            <Link className="link-text" to={"/categories"}>
              <MenuOutlined />
              <span>Categories </span>
            </Link>
          </Menu.Item>

        <Menu.Item key="3">
          <Link className="link-text" to={"/menu"}>
            <ReadOutlined />
            <span>Menu </span>
          </Link>
        </Menu.Item>

        <Menu.Item key="4">
          <Link className="link-text" to={"/orders"}>
            <SolutionOutlined />
            <span>Orders </span>
          </Link>
        </Menu.Item>

        <Menu.Item key="5">
          <Link className="link-text" to={"/waitress"}>
            <UsergroupAddOutlined />
            <span>Waitress </span>
          </Link>
        </Menu.Item>

        <Menu.Item key="6">
          <Link className="link-text" to={"/tables"}>
            <BorderlessTableOutlined />
            <span>Tables </span>
          </Link>
        </Menu.Item>

        <Menu.Item key="7">
          <Link className="link-text" to={"/reservations"}>
            <FileDoneOutlined />
            <span>Reservations</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Menulist;
