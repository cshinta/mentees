/* eslint-disable no-console */
import React, { useState } from "react";
import { Row, Col, Form, Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnFinish = async (values) => {
    setLoading(true);
    try {
      const { status, data } = await api.post("/auth/login", values);

      if (status === 200) {
        const response = data.data;

        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.user.username);

        if (response.user.role === "Mentee") {
          navigate("/mentee/find-mentor");
        } else {
          navigate("/mentor/mentee-request");
        }
      } else {
        message.error("Something wrong happened");
        console.log(data.errorStack);
      }
    } catch (error) {
      message.error("Something wrong happened");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="logo" />
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
            <Form
              layout="vertical"
              wrapperCol={{ span: 16 }}
              onFinish={handleOnFinish}
            >
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
                  htmlType="submit"
                  loading={loading}
                >
                  <span style={{ textAlign: "center", width: "100%" }}>
                    Submit
                  </span>
                </Button>
                <br />
                <span className="text-secondary">
                  Don't have an account yet?{" "}
                  <span
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Register
                  </span>
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
