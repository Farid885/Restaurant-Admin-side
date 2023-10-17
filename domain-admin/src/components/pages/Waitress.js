import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Button, Form,  Input, Card,  Space,  } from "antd";

import "../../assets/scss/waitress.scss";
import WaitressList from "../elements/WaitressLists";
import { agent } from "../api/Agent";


function Waitress(props) {
  const [form] = Form.useForm();

  const handleCancel = () => {
    form.resetFields();
  };

  const [categories, setCategories] = useState([]);
  const [categoryIdToEdit, setCategoryIdToEdit] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await agent.Persons.All();

    const sortedData = res.sort((a, b) => b.id + a.id);
    setCategories(sortedData);
  };

  const onFinish = async (values) => {
    if (categoryIdToEdit) {
      await agent.Persons.Update(categoryIdToEdit, {
        name: values.persons,
      });
      console.log(categoryIdToEdit);
      setCategoryIdToEdit(undefined);
    } else {
      await agent.Persons.Create({
        name: values.persons,
      });
    }

    await getData();
    handleCancel();
  };

  // Edit knopkasina basanda isdiyir
  function prepareEdit(record) {
    setCategoryIdToEdit(record.id);
    form.setFieldValue("persons", record.name);
  }

  async function removeCategory(id) {
    await agent.Persons.Remove(id);
    await getData();
  }

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };

  return (
    <div>
      <div>
        <h3 className="waitress-name">Waitress</h3>
      </div>
      <Row className="" gutter={[16, 16]}>
        <Col md={12} className="">
          {/* Forms js */}
          <WaitressList Waitress={categories} prepareEdit={prepareEdit} removeCategory={removeCategory} />
        </Col>
        <Col style={{ height: "340px" }} md={12} className="  mt-1 p-3    card">
          <div>
            <p className="add-categories">{categoryIdToEdit ? "Update" : "Add"}</p>
          </div>
          <Card className="card-body">
            <p className="categor">Category Name</p>

            <div className="">
              <Form
                form={form}
                name="complex-form"
                onFinish={onFinish}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
              >
                <Form.Item label="">
                  <Space>
                    <Form.Item
                      name="persons"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Full the Input",
                        },
                      ]}
                    >
                      <Input    className="" style={{ width: 400 }} placeholder="Persons Name" />
                    </Form.Item>
                  </Space>
                </Form.Item>
                <div className="form-button">
                  <Form.Item label=" " colon={false}>
                    <Space>
                    
                      <Button className=" " type="primary"
                      
                      
                      htmlType="submit">
                        {categoryIdToEdit ? "Update" : "Submit"}
                      </Button>
                      <Button className="" type="default" onClick={handleCancel}>
                        Cancel
                      </Button>
                    </Space>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Waitress;
