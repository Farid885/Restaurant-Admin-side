import React, { useEffect, useState } from "react";
import { Row, Col, Card, Table, Button, Spin, Form, Tooltip, Input, Popconfirm, Select, InputNumber } from "antd";
import { DownCircleOutlined, EditFilled, DeleteFilled, PicCenterOutlined, RetweetOutlined, CloseCircleOutlined } from "@ant-design/icons";
// import { connect } from "react-redux";
// import admin from "../../../const/api";
// import { useTranslation } from "react-i18next";
// import { noWhitespace } from "../../../utils/rules";
import { Link } from "react-router-dom";

const { Option } = Select;

const Orderdetail = (props) => {
    const [form] = Form.useForm();
    // const { id } = props.match.params;
    // const { t } = useTranslation();
    const [positions, setPositions] = useState([]);
    const [categories, setCategories] = useState([]);
    // let imageUrl = 'https://cdn.discordapp.com/attachments/1090686999427551333/1104320741199069305/7717896.jpeg';
    const [image, setImage] = useState('');
    const [menus, setMenus] = useState([]);
    const [orderData, setOrderData] = useState({});
    const [spin, setSpin] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [editing, setEditing] = useState(null);

    const cols = [
        { key: "index", value: "#", con: true },
        { key: "name", value: ("name"), con: true },
        { key: "id", value: "", con: false },
    ];

    const columns = [
        {
            title: "Photo",
            dataIndex: "image",
            key: "2",
            render: (i) => <img className={"tableImage"} src={i} alt="" />,
        },
        {
            title: ("name"),
            key: "3",
            dataIndex: "menu",
        },
        {
            title: ("category"),
            key: "4",
            dataIndex: "category",
        },
        {
            title:'Count',
            key: "5",
            dataIndex: "count",
        },
        {
            title:'Price (azn)',
            key: "6",
            dataIndex: "price",}
        
    ];

 



    return (
        <Row gutter={[10, 10]}>
            <Col xs={24}>
                <div className="border flex-between page-heading flex p-2 mt-0 bg-white">
                    <div className="page-name">
                        <PicCenterOutlined className="f-20 mr5-15" />
                        <span className="f-20 bold">Order details</span>
                    </div>
                    <Link
                        to={{
                            pathname: `/orders`,
                        }}
                    >
                        <Button type={"primary"}>Orders</Button>
                    </Link>
                </div>
            </Col>
            <Col xs={24}>
                <Table
                    loading={spin}
                    size="small"
                    className="bg-white animated fadeInRight"
                    columns={columns}
                    dataSource={(positions, cols)}
                    pagination={{
                        pageSize: 10,
                        current_page: 1,
                        total: positions.length,
                    }}
                />
            </Col>
            <Col xs={8}>
                {!spin &&
                <div className="h-100  animated fadeInLeft  p-2 mt-0 bg-white">
                    <div className={'flex mt-10 flex-between'}>
                        <span> Waiter </span>
                        <b>{orderData.person}</b>
                    </div>
                    <div className={'flex mt-10 flex-between'}>
                        <span> Table</span>
                        <b>{orderData.table}</b>
                    </div>
                    <div className={'flex mt-10 flex-between'}>
                        <span> Status</span>
                        <b>
                            {orderData.status === 0 ? (
                                <span className="green"> New</span>
                            ) : orderData.status === 1 ? (
                                    <span className="blue"> Pending</span>
                                ) :
                                orderData.status === 2 ? (
                                    <span className="green"> Finished</span>
                                ):
                                orderData.status === 3 ? (
                                    <span className="red"> Canceled</span>
                                ): null
                            }
                        </b>
                    </div>
                    <div className={'flex mt-10 flex-between'}>
                        <span>Total price</span>
                        <b>{orderData.total} azn</b>
                    </div>
                </div>
                }
            </Col>
            {(orderData.status !== 2 && orderData.status !== 3) &&
            <Col xs={16}>
                <Card title={("addTo")} className={"animated fadeInRight"}>
                    <Form layout="vertical"  form={form}>
                        <Row gutter={[8, 8]}>
                            <Col md={12} xs={24}>
                                <div className="gallery border w-100">
                                    <img className={'mainImg w-100'} src={image} alt=""/>
                                </div>
                            </Col>
                            <Col md={24} xs={24}>
                                <Row gutter={[8, 8]}>
                                    <Col md={12} sm={12} xs={24}>
                                        <p className={"mb-10"}>Category</p>
                                        <Form.Item
                                            className="mb-5"
                                            validateTrigger="onChange"
                                            name={`category_id`}
                                            // rules={[noWhitespace(t("inputError"))]}
                                        >
                                            <Select
                                                // onChange={(e) =>getMenus(e)}
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
                                                {categories.map((c , i)=>(
                                                    <Option key={i}  value={c.id}>
                                                        {c.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12} sm={12} xs={24}>
                                        <p className={"mb-10"}>Products (Menu)</p>
                                        <Form.Item
                                            className="mb-5"
                                            validateTrigger="onChange"
                                            name={`menu_id`}
                                            // rules={[noWhitespace(t("inputError"))]}
                                        >
                                            <Select
                                                showSearch
                                                // onChange={(e) => menuChange(e) }
                                                notFoundContent={null}
                                                disabled={disabled}
                                                optionFilterProp="children"
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                                filterSort={(optionA, optionB) =>
                                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                                }
                                            >
                                                {menus.map((c , i)=>(
                                                    <Option key={i}  value={c.id}>
                                                        {c.name}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={6} sm={12} xs={24}>
                                        <p className={"mb-10"}>Count</p>
                                        <div className="form-lang">
                                            <Form.Item
                                                validateTrigger="onChange"
                                                name={`count`}
                                                // rules={[(("inputError"))]}
                                            >
                                                <InputNumber
                                                    // onChange={(e) =>{countChange(e)}}
                                                    min={1} className="w-100" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col md={6} sm={12} xs={24}>
                                        <p className={"mb-10"}>Price (azn)</p>
                                        <div className="form-lang">
                                            <Form.Item
                                                validateTrigger="onChange"
                                                name={`price`}
                                                // rules={[noWhitespace(t("inputError"))]}
                                            >
                                                <InputNumber readOnly className="w-100" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                    <Col md={12} sm={12} xs={24}>
                                        <p className={"mb-10"}>Total costs</p>
                                        <div className="form-lang">
                                            <Form.Item
                                                validateTrigger="onChange"
                                                name={`total`}
                                                
                                            >
                                                <InputNumber readOnly className="w-100" />
                                            </Form.Item>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="flex  flex-end mt-15">
                            <Button className={'mr-10'}  type={'primary'} htmlType="submit">{("save")}</Button>
                            <Button>{("cancel")}</Button>
                        </div>
                    </Form>
                </Card>
            </Col>
            }


        </Row>
    );
};

export default Orderdetail
