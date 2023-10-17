import React, { useState, useEffect } from "react";
import { Spin, Col, Form, Row, Select, Button } from "antd";
// import { connect } from "react-redux";
// import { notify } from "../../../redux/actions";
// import { useTranslation } from "react-i18next";
// import { noWhitespace } from "../../../utils/rules";
import { PicCenterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import history from "../../../const/history";
// import admin from "../../../const/api";
const { Option } = Select;

function EditOrders(props) {
    const [spin, setSpin] = useState(false);
    const [persons, setPersons] = useState([]);
    const [tables, setTables] = useState([]);
    let editing = props.match ? props.match.params.id : null;

    const [form] = Form.useForm();
    

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col xs={24}>
                    <div className="border flex-between page-heading flex p-2 mt-0 bg-white">
                        <div className="page-name">
                            <PicCenterOutlined className="f-20 mr5-15" />
                            <span className="f-20 bold">Order</span>
                        </div>
                        <Link to="/orders">
                            <Button type="primary">{("cancel")}</Button>
                        </Link>
                    </div>
                </Col>
                <Col xs={24}>
                    {spin ? (
                        <div className="flex animated fadeIn p-2 bg-white all-center">
                            <Spin size="large" />
                        </div>
                    ) : (
                        <div className="p-2 animated edit fadeInUp bg-white">
                            <Form form={form}  layout="vertical">
                                <Row gutter={[8, 8]}>
                                    <Col md={12} sm={12} xs={24}>
                                        <p className="mb-10">Table</p>
                                        <Form.Item
                                            className="mb-5"
                                            validateTrigger="onChange"
                                            name="table_id"
                                            rules={[(("inputError"))]}
                                        >
                                            <Select
                                                showSearch
                                                notFoundContent={null}
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                                filterSort={(optionA, optionB) =>
                                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                                }
                                            >
                                                {tables.map((c, i) => (
                                                    <Option key={i} value={c.id}>
                                                        {c.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12} sm={12} xs={24}>
                                        <p className="mb-10">Waiter</p>
                                        <Form.Item
                                            className="mb-5"
                                            validateTrigger="onChange"
                                            name="person_id"
                                            rules={[(("inputError"))]}
                                        >
                                            <Select
                                                showSearch
                                                notFoundContent={null}
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                                filterSort={(optionA, optionB) =>
                                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                                }
                                            >
                                                {persons.map((c, i) => (
                                                    <Option key={i} value={c.id}>
                                                        {c.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24}>
                                        <div className="flex">
                                            <Button className="mr-15" htmlType="submit">
                                                {("save")}
                                            </Button>
                                            { (
                                                <Link to={`/orders/detail/`}>
                                                    <Button className="mr-15" type="primary">
                                                        Order details
                                                    </Button>
                                                </Link>
                                            )}
                                            <Link to="/orders">
                                                <Button type="primary">{("cancel")}</Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
}

export default EditOrders