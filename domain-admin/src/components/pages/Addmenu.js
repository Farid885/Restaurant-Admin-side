import React from "react";
import { useState, useEffect } from "react";
import { Col, Input, Form, Row, Select, Button, InputNumber, Image } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { agent } from "../api/Agent";

const { Option } = Select;

function Addmenu() {
  const [url, setUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState();

  const getData = async () => {
    const res = await agent.Categories.All();
    setCategories(res);
    // console.log(res)
  };
  async function getMenuItemsOfCategory(categoryId) {
    const res = await agent.Menu.GetByCategory(categoryId);
    setMenuItems(res);
  }

  async function getMenuItemsOfCategory(categoryId) {
    const res = await agent.Menu.GetByCategory(categoryId);
    setMenuItems(res);
  }

  const urlChangeFnc = (e, val) => {
    setUrl(e.target.value);
    getMenuItemsOfCategory(val);
  };

  useEffect(() => {
    getData();
  }, []);

  async function onFormSubmit(values) {
    console.log(values);
    await agent.Menu.Create(values);
    navigate("/menu");
  }

  return (
    <Form onFinish={onFormSubmit} layout="vertical">
      <Row gutter={[8, 8]}>
        <Col xs={4}>
          <div className="gallery w-100">
            <img alt="" />
            <Image width={200} src={url} />
          </div>
        </Col>
        <Col xs={20}>
          <Row gutter={[16, 16]}>
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Name</p>
              <div className="">
                <Form.Item name={"name"}>
                  <Input className="w-100" />
                </Form.Item>
              </div>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Photo</p>
              <div className="">
                <Form.Item validateTrigger="onChange" name={`image`}>
                  <Input className="w-100" onChange={urlChangeFnc} value={url} />
                </Form.Item>
              </div>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Category</p>
              <Form.Item name={"category_id"} className="mb-5" validateTrigger="onChange">
                <Select onChange={(val) => getMenuItemsOfCategory(val)}>
                  {categories.map((cat, i) => {
                    return (
                      <Option value={cat.id} key={i}>
                        {cat.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Price </p>
              <div className="form-lang">
                <Form.Item validateTrigger="onChange" name={`price`}>
                  <InputNumber type="number" className="w-100" />
                </Form.Item>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <div className="flex  ">
            <Button type="primary" className="  mr-15 m-4" htmlType="submit">
              Save
            </Button>
            <Link to={{ pathname: `/menu` }}>
              <Button>Cancel</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default Addmenu;
