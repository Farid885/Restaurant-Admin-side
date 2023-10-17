import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/main.scss";
import Menulist from "../elements/Menulist";
import { Layout } from "antd";

const { Sider } = Layout;

const Sidebar = (props) => {
  const { collapsed } = props;

  return (
    <div className="side-control  " >
      <Sider  style={{}} className=" side-static main-container" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">{collapsed ? <h5  style={{ fontFamily: 'Kashima',fontSize:'30px'}} className="text-center logo" >S</h5>: <h5 style={{ fontFamily: 'Kashima',fontSize:'30px' }} className="">Sakura</h5>}</div>

        <Menulist />
      </Sider>
    </div>
  );
};
export default Sidebar;
