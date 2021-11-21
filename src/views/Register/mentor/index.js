/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Input, Card, Steps } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Step1 from "./step1";

const Page = () => {
  const { Step } = Steps;

  return (
    <section
      style={{
        backgroundColor: "#D1D1E9",
        padding: "2vh 3vw",
        minHeight: "100vh",
      }}
      id="registration"
    >
      <div>
        <Steps type="navigation" size="small" style={{ padding: "2vh 0" }}>
          <Step title="Personal Information" />
          <Step title="Expertise Information" />
          <Step title="Account Information" />
          <Step title="Confirmation" />
        </Steps>
        <Card className="card-regis">
          <Step1 />
        </Card>
      </div>
    </section>
  );
};

export default Page;
