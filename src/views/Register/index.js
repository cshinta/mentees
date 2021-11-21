/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Page = () => {

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
            <Col offset={2} span={4} style={{ textAlign: "center" }}>
              <Button
                size="large"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="text-bold">Mentor</span>
              </Button>
            </Col>
            <Col span={4}>
              <Button
                size="large"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="text-bold">Mentee</span>
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
