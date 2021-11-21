/* eslint-disable no-console */
import React from "react";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();

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
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            style={{ overflow: "hidden" }}
          />
        </Col>
        <Col>
          <Row>
            <Col>
              <Button
                size="large"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <span className="text-bold">Login</span>
              </Button>
            </Col>
            <Col style={{ padding: "0 10px" }}>
              <Button
                size="large"
                onClick={() => {
                  navigate("/register");
                }}
                className="btn-primary"
              >
                <span className="text-bold">Register</span>
              </Button>
            </Col>
          </Row>
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
          <div style={{ fontSize: "75px", fontWeight: "700" }}>
            Meet your <br /> Mentor
          </div>
          <div style={{ fontSize: "45px", fontWeight: "300" }}>
            Upgrade your passion
          </div>
          <Row style={{ padding: "5vh 0" }}>
            <Col span={10}>
              <Button
                size="large"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => {
                  navigate("/login");
                }}
                className="btn-primary"
              >
                <span className="text-bold">Find Mentor</span>
              </Button>
            </Col>
            <Col span={10}>
              <Button
                size="large"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                <span className="text-bold">Ask Publicly</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Page;
