/* eslint-disable no-unused-vars */
import React from "react";
import { Layout, Row, Col, Card, Menu, Badge, Avatar, Dropdown } from "antd";
import { BellOutlined, UserOutlined, DownOutlined } from "@ant-design/icons";
import "./Navbar.scss";

const Navbar = () => {
  const { Header } = Layout;
  const { SubMenu } = Menu;

  const menu = (
    <Menu>
      <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
      <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        backgroundColor: "#fff",
        height: 100,
        borderRadius: "0 0 50px 50px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      id="Navbar"
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "12px 0px 0px 0px",
        }}
      >
        <Col span={4}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.png`}
              alt="logo"
              style={{
                height: 30,
              }}
            />
          </div>
        </Col>
        <Col span={6}>
          <div>
            <Menu selectedKeys={"findMentor"} mode="horizontal">
              <Menu.Item key="findMentor">
                <span className="text-default"> Find Mentor</span>
              </Menu.Item>
              <Menu.Item key="forum">
                <span className="text-default"> Forum</span>
              </Menu.Item>
              <Menu.Item key="chat">
                <span className="text-default" style={{ paddingRight: "2px" }}>
                  {" "}
                  Chat
                </span>
                <Badge dot={true}></Badge>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col offset={8} span={2}>
          <Menu mode="horizontal">
            <SubMenu
              key="notification"
              icon={
                <Badge dot={true}>
                  <BellOutlined style={{ fontSize: "25px" }} />
                </Badge>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Col>
        <Col span={3}>
          <Card className="card-profile">
            <Row>
              <Col style={{ padding: "0 10px" }}>
                <Avatar icon={<UserOutlined />} />
              </Col>
              <Col>
              <span style={{ fontSize: "20px" }}> miuwmia </span>
                <Dropdown overlay={menu}>
                  <DownOutlined />
                </Dropdown>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
