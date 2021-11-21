/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Input, Card, Steps } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

const Page = () => {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);

  const onNext = () => {
    setCurrent(current + 1);
  };

  const onPrev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    <Step1 onNext={onNext} />,
    <Step2 onNext={onNext} onBack={onPrev} />,
    <Step3 onNext={onNext} onBack={onPrev} />,
    <Step4 onBack={onPrev} />,
  ];

  const stepsTitle = [
    "Personal Information",
    "Expertise Information",
    "Account Information",
    "Confirmation",
  ];

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
        <Steps
          type="navigation"
          size="small"
          style={{ padding: "2vh 0" }}
          current={current}
        >
          {stepsTitle.map((item) => (
            <Step key={item} title={item} />
          ))}
        </Steps>
        <Card className="card-regis">
          <div className="card-content">{steps[current]}</div>
        </Card>
      </div>
    </section>
  );
};

export default Page;
