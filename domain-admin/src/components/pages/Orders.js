import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Table,
    Button,
    Tooltip,
    Spin,
    Popconfirm,
    Select
} from "antd";
import {
    PicCenterOutlined,
    EyeFilled,
    DeleteFilled,
    CheckCircleOutlined,
    EditFilled,
    CloseCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { convertColumns } from "../../../utils/columnconverter";

const { Option } = Select;

function Orders(props) {
    const [postlist, setPostList] = useState([]);
    const [spin, setSpin] = useState(false);

    const cols = [
        { key: "tableIndex", value: "#", con: true },
        { key: "person", value: "Xidmət edən şəxs", con: true },
        { key: "table", value: "Masa", con: true },
        { key: "total", value: "Ümumi məbləğ", con: false },
        { key: "date", value: "Yaradılma tarixi", con: false },
        { key: "status", value: "Status", con: false },
        { key: "buttons", value: "", con: false },
    ];

    const initialColumns = [
        {
            title: "Waiter",
            dataIndex: "person",
            key: "2",
        },
        {
            title: "Table",
            dataIndex: "table",
            key: "3",
        },
        {
            title: "Create date",
            dataIndex: "date",
            key: "4",
        },
        {
            title: "Total price",
            dataIndex: "total",
            key: "5",
            render: (i) => (
                <span className={i <= 0 ? "red" : "blue"}>{i} azn</span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "6",
            render: (i) => {
                return i === 0 ? (
                    <span className="green">New</span>
                ) : i === 1 ? (
                    <span className="blue">Pending</span>
                ) : i === 2 ? (
                    <span className="green">Finished</span>
                ) : i === 3 ? (
                    <span className="red">Canceled</span>
                ) : null;
            },
        },
        {
            title: "",
            dataIndex: "buttons",
            key: "9",
            render: (i) => (
                <div className="flex flex-end">
                    {i.status === 0 && (
                        <Tooltip className="ml-5" title={"Edit"} placement="topRight">
                            <Link to={{ pathname: `/orders/edit/${i.id}` }}>
                                <Button className="border-none" type="text" shape="circle">
                                    <EditFilled />
                                </Button>
                            </Link>
                        </Tooltip>
                    )}
                    {i.status === 1 && (
                        <Popconfirm
                            placement="topRight"
                            title={"Are you sure for finish? "}
                            // onConfirm={() => changeStatus(i, 2)}
                            okText={"Yes"}
                            cancelText={"No"}
                        >
                            <Tooltip placement={"bottom"} className="ml-5" title={"Finish"}>
                                <Button className="border-none" type="text" shape="circle">
                                    <CheckCircleOutlined />
                                </Button>
                            </Tooltip>
                        </Popconfirm>
                    )}
                    {i.status !== 1 && (
                        <Popconfirm
                            placement="topRight"
                            title={"Are you sure?"}
                            // onConfirm={() =>}
                            okText={"Yes"}
                            cancelText={"No"}
                        >
                            <Tooltip className="ml-5" title={"Delete"}>
                                <Button className="border-none" type="text" shape="circle">
                                    <DeleteFilled />
                                </Button>
                            </Tooltip>
                        </Popconfirm>
                    )}
                    {i.status !== 3 && i.status !== 2 && (
                        <Popconfirm
                            placement="topRight"
                            title={"Are you sure for cancel? "}
                            // onConfirm={() => changeStatus(i, 3)}
                            okText={"Yes"}
                            cancelText={"No"}
                        >
                            <Tooltip placement={"bottom"} className="ml-5" title={"Cancel"}>
                                <Button className="border-none" type="text" shape="circle">
                                    <CloseCircleOutlined />
                                </Button>
                            </Tooltip>
                        </Popconfirm>
                    )}
                    <Tooltip className="ml-5" title={"Order details"} placement="topRight">
                        <Link to={{ pathname: `/orders/products/${i.id}` }}>
                            <Button className="border-none" type="text" shape="circle">
                                <EyeFilled />
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
            ),
        },
    ];



    const exampleData = [
      {
        person: "John Doe",
        table: "Table 1",
        date: "2023-10-10T10:30:00",
        total: 25.0,
        status: 0,
        buttons: { obj: { id: 1, status: 0 } },
      },
      {
        person: "Jane Smith",
        table: "Table 2",
        date: "2023-10-10T11:45:00",
        total: 30.0,
        status: 1,
        buttons: { obj: { id: 2, status: 1 } },
      },
      {
        person: "Bob Johnson",
        table: "Table 3",
        date: "2023-10-10T12:15:00",
        total: 18.5,
        status: 2,
        buttons: { obj: { id: 3, status: 2 } },
      },
      {
        person: "Alice Williams",
        table: "Table 4",
        date: "2023-10-10T13:00:00",
        total: 15.0,
        status: 3,
        buttons: { obj: { id: 4, status: 3 } },
      },
    ];
    
    
    
    return (
        <div>
            <Row gutter={[10, 10]}>
                <Col xs={24}>
                    <div className="border flex-between page-heading flex p-2 mt-0 bg-white">
                        <div className="page-name">
                            <PicCenterOutlined className="f-20 mr5-15" />
                            <span className="f-20 bold">Orders</span>
                        </div>
                        <div>
                            <Link to={{ pathname: `/orders/edit` }}>
                                <Button type={"primary"}>Add</Button>
                            </Link>
                        </div>
                    </div>
                </Col>

                <>
                    {spin ? (
                        <Col xs={24}>
                            <div className="flex animated fadeInUp bg-white all-center p-2">
                                <Spin size={"large"} />
                            </div>
                        </Col>
                    ) : (
                        <Col xs={24}>
                            <Table
                                size="small"
                                className="bg-white animated fadeIn"
                                columns={initialColumns}
                                // dataSource={convertColumns(postlist, cols)}
                                dataSource={exampleData}
                                pagination={{
                                    pageSize: 25,
                                    current_page: 1,
                                }}
                            />
                        </Col>
                    )}
                </>
            </Row>




            <Col>
            
            </Col>
        </div>
    );
}

export default Orders;
