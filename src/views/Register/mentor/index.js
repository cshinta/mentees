/* eslint-disable no-console */
import React, { useState } from "react";
import { Card, message, Steps } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import api from "../../../api";

const Page = () => {
  const { Step } = Steps;
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({});

  const onNext = () => {
    setCurrent(current + 1);
  };

  const onPrev = () => {
    setCurrent(current - 1);
  };

  const onFinish = async () => {
    try {
      delete form.confirmation
      const { status, data } = await api.post("/auth/register", {...form, role: "Mentee"});

      if (status === 200) {
        message.success("Register successful");

        navigate("/login");
      } else {
        message.error("Something wrong");
        console.log(data.errorStack);
      }
    } catch (error) {
      message.error("Something wrong");
      console.log(error);
    }
  };

  const steps = [
    <Step1 onNext={onNext} setForm={setForm} form={form} />,
    <Step2 onNext={onNext} onBack={onPrev} setForm={setForm} form={form} />,
    <Step3 onNext={onNext} onBack={onPrev} setForm={setForm} form={form} />,
    <Step4 onNext={onFinish} onBack={onPrev} setForm={setForm} form={form} />,
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
          {console.log(form)}
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
