import React from "react";
import { Button, Form, Input, Select, Space, message, Col, Card, Spin, Row, Image, Popconfirm } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { agent } from "../api/Agent";
import "../../assets/scss/menu.scss";
import { Link } from "react-router-dom";

import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";

const Menu = () => {
  // const [form] = Form.useForm();

  // const handleCancel = () => {
  //   form.resetFields();
  // };
  const [menu, setmenu] = useState([]);
  const [categories, setCategories] = useState();
  // const [categories, setmenu] = useState([]);
  // const [categoryIdToEdit, setCategoryIdToEdit] = useState();
  useEffect(() => {
    getDatas();
    getCategories();
  }, []);

  const getDatas = async () => {
    const res = await agent.Menu.All();
    const sortedData = res.sort((a, b) => b.id - a.id);
    setmenu(sortedData);
    // console.log(res)
  };

  async function getCategories() {
    setCategories(await agent.Categories.All());
  }

  async function removeMenu(id) {
    await agent.Menu.Remove(id);
    await getDatas();
  }

  return (
    <div>
      <Row gutter={[10, 10]}>
        <Col xs={24}>
          <div className="   menu-head flex-between flex p-2 mt-0 bg-white">
            <div className="page-name">
              <MenuOutlined style={{ fontSize: "21px" }} className=" " />
              <span className=" menu-style p-2 bold">Menu</span>
            </div>
            <div>
              <Link
                to={{
                  pathname: `/menu/add`,
                }}
              >
                <Button type={"primary"}>Add</Button>
              </Link>
            </div>
          </div>
        </Col>
        <div className="container  ">
          <div className="row  align-items-end">
            {menu.map((men, index) => {
              const categoryName = categories?.find((it) => it.id === men.category_id)?.name;
              // console.log(men.id)

              // console.log("men.category_id",men.category_id)
              // console.log(categories)

              return (
                <div key={index} className=" mb-5  col-lg-4 col-12">
                  <div className=" card  position-relative border-0 text-center rounded-3">
                    <div className="img position-relative ">
                      <img
                        style={{ objectFit: "cover" }}
                        src={men.image}
                        width="200"
                        height="200"
                        alt="launge"
                        className="shadow"
                      />
                    </div>
                    <div className="card-body px-3 ms-0 shadow">
                      <p className="card-title fs-5">{men.name}</p>
                      <span className="fw-bolder">{men.price} $</span>
                      <p className="card-text">{categoryName}</p>
                      <ul className="d-flex justify-content-around align-items-center  ">
                        <li className="View-icon">
                          <Button className="position-relative image-view btn d-block">
                            <Image
                              className="position-absolute isNUT"
                              style={{ borderRadius: "50px", objectFit: "cover" }}
                              width={"35px"}
                              height={"35px"}
                              src={men.image}
                            />
                          </Button>
                          View
                        </li>
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to={{ pathname: `/menu/edit/${men.id}` }}
                        >
                          <li className="Edit-icon">
                            <Button className="btn d-block shadow-none">
                              <AiOutlineEdit color="black" />
                            </Button>
                            Edit
                          </li>
                        </Link>
                        <li className="Delete-icon">
                          <Popconfirm
                            title="Are you sure you want to delete this item?"
                            onConfirm={() => removeMenu(men.id, message.success("Successfully Deleted"))}
                            onCancel={() => message.info("Canceled")}
                            okText="Yes"
                            cancelText="No"
                          >
                            <Button className="btn d-block">
                              <AiOutlineDelete color="black" />
                            </Button>
                          </Popconfirm>
                          Delete
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <Row gutter={[16, 16]}></Row> */}
      </Row>
    </div>
  );
};

export default Menu;
