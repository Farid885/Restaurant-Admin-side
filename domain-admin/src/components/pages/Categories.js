import React from "react";
import { useEffect, useState } from "react";
import { Col, Row, Button, Form, Table, Input, Card, message, Space ,Popconfirm} from "antd";
import "../../assets/scss/categories.scss";
import Forms from "../elements/Forms";
import { agent } from "../api/Agent";
// import { UserOutlined } from '@ant-design/icons';

function Categories(props) {
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
    const res = await agent.Categories.All();
    const sortedData = res.sort((a, b) => b.id - a.id);
    setCategories(sortedData);
  };

  const onFinish = async (values) => {
    if (categoryIdToEdit) {
      await agent.Categories.Update(categoryIdToEdit, {
        name: values.category,
        
      });
      console.log(categoryIdToEdit);
      setCategoryIdToEdit(undefined);
     
    } else {
      await agent.Categories.Create({
        name: values.category,
      });
    }

    await getData();
    handleCancel();
  };

  // Edit knopkasina basanda isdiyir
  function prepareEdit(record) {
    setCategoryIdToEdit(record.id);
    form.setFieldValue("category", record.name);
    
    
  }

  async function removeCategory(id) {
    await agent.Categories.Remove(id);
    await getData();
  }

  // const [inputValue, setInputValue] = useState("");
  // const [error, setError] = useState(false);

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  //   setError(false);
  // };




  return (
    <div>
      <div>
        <h3>Categories</h3>
      </div>
      <Row className="" gutter={[16, 16]}>
        <Col md={12} className="">


        {/* Forms js */}
          <Forms 

          prepareEdit={prepareEdit}
           removeCategory={removeCategory}
            categories={categories} />
        </Col>
        <Col style={{ height: "340px" }} md={12} className="  mt-1 p-3   card">
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
                      name="category"
                      noStyle
                      rules={[
                        {
                          required: true,
                          message: "Full the Input",
                        },
                      ]}
                    >
                      <Input className="" style={{ width: 400 }} placeholder="Category Name" />
                    </Form.Item>
                  </Space>
                </Form.Item>
                <div className="form-button">
                  <Form.Item label=" " colon={false}>
                    <Space>
                      <Button className=" " type="primary" htmlType="submit">
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

export default Categories;
