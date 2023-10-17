import React from "react";
import { useState, useEffect } from "react";
import { Col, Input, Form, Row, Select, Button, InputNumber, Image } from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";
import { agent } from "../api/Agent";
import { useForm } from "antd/es/form/Form";

const { Option } = Select;

function Editmenu() {
  const [form] = useForm();
  const [url, setUrl] = useState("");
  const [categories, setCategories] = useState([]);

  // Step 1
  const [menuItems, setMenuItems] = useState();

  const navigate = useNavigate();
  const params = useParams();

  const getData = async () => {
    const res = await agent.Categories.All();
    setCategories(res);
    // console.log(res)
  };

  /**
   *
   * @param {string} url
   */
  const urlChangeFnc = (url) => {
    setUrl(url);
  };

  async function getItemDetails() {
    const currentItemId = params.id;
    const res = await agent.Menu.Details(currentItemId);
    form.setFieldsValue(res);
    urlChangeFnc(res.image);
  }

  useEffect(() => {
    getData();
    getItemDetails();
  }, []);

  async function onFormSubmit(values) {
    console.log(values);
    // await  agent.Menu.Create(values)
    await agent.Menu.Update(params.id, values);
    navigate("/menu");
  }

  // Step  2
  async function getMenuItemsOfCategory(categoryId) {
    const res = await agent.Menu.GetByCategory(categoryId);
    setMenuItems(res);
  }

  return (
    <Form form={form} onFinish={onFormSubmit} layout="vertical">
      <Row gutter={[8, 8]}>
        <Col xs={4}>
          <div className="gallery w-100">
            <Image src={url} width={200} />
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
                  <Input className="w-100" onChange={(e) => urlChangeFnc(e.target.value)} value={url} />
                </Form.Item>
              </div>
            </Col>
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Category</p>
              <Form.Item name={"category_id"} className="mb-5" validateTrigger="onChange">
                {/* Step 4 */}
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
            {/* Step 3 */}
            <Col md={12} sm={12} xs={24}>
              <p className={"mb-10"}>Menu items</p>
              <Form.Item name={"menu_item_id"} className="mb-5" validateTrigger="onChange">
                <Select>
                  {menuItems?.map((menItem, i) => {
                    return (
                      <Option value={menItem.id} key={i}>
                        {menItem.name}
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

export default Editmenu;
