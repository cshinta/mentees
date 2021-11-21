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
        width: "100vw",
        padding: "2vh 3vw",
      }}
    >
      <Row
        justify="center"
        align="middle"
        style={{ height: "90%", textAlign: "center" }}
      >
        <Col span={24}>
          <div style={{ fontSize: "100px" }} className="text-bold">
            Register
          </div>
          <div className="text-header">as a:</div>
          <Row justify="center" align="middle" style={{ padding: "2vh 0" }}>
            <Col span={4} style={{ textAlign: "center" }}>
              <Button
                onClick={() => {
                  navigate("/register/mentor");
                }}
                size="large"
              >
                <span
                  className="text-bold"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Mentor
                </span>
              </Button>
            </Col>
            <Col span={4}>
              <Button
                onClick={() => {
                  navigate("/register/mentee");
                }}
                size="large"
              >
                <span
                  className="text-bold"
                  style={{
                    textAlign: "center",
                  }}
                >
                  Mentee
                </span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <div>
        <span style={{ display: "flex", justifyContent: "center" }}>
          Note: As a mentor, you can still ask publicly
        </span>
      </div>
    </section>
  );
};

export default Page;
