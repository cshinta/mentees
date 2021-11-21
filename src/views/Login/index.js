/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const history = useNavigate();

  return (
    <section
      style={{
        overflowX: "hidden",
        height: "100vh",
        padding: "2vh 3vw",
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{
          padding: "12px 12x",
        }}
      >
        <Col>
          <img src={`${process.env.PUBLIC_URL}/assets/Logo.png`} alt="logo" />
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        style={{ height: "90%", padding: "1vh 2vw" }}
      >
        <Col span={14}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/landing.png`}
            alt="logo"
            style={{ overflow: "hidden" }}
          />
        </Col>
        <Col span={10}>
          <div style={{ fontSize: "60px", fontWeight: "700" }}>Login</div>
          <div style={{ fontSize: "25px", fontWeight: "300" }}>
            <span className="text-bold">Explore further</span> by joining us!
          </div>
          <div style={{ padding: "3vh 0 0 0", textAlign: "center" }}>
            <Form layout="vertical" wrapperCol={{ span: 16 }}>
              <Form.Item
                label={
                  <span className="text-bold" style={{ fontSize: "25px" }}>
                    Username
                  </span>
                }
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input size="large" placeholder="Enter your username" />
              </Form.Item>
              <Form.Item
                label={
                  <span className="text-bold" style={{ fontSize: "25px" }}>
                    Password
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 16 }}>
                <Button
                  size="large"
                  className="btn-primary"
                  style={{ width: "100%" }}
                >
                  <span style={{ textAlign: "center", width: "100%" }}>
                    Submit
                  </span>
                </Button>
                <br />
                <span className="text-secondary">
                  Don't have an account yet? Register
                </span>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Page;
