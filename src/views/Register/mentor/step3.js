import React from "react";
import { Row, Col, Form, Button, Input, Select } from "antd";

const Page = ({ onNext, onBack, setForm, form }) => {
  const handleFinish = (values) => {
    setForm((form) => ({
      ...form,
      email: values.email,
      password: values.password,
      username: values.username,
    }));

    onNext();
  };

  return (
    <div id="mentor-registration-3" style={{ padding: "5vh 8vw" }}>
      <Form layout="vertical" wrapperCol={{ span: 24 }} onFinish={handleFinish}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item
              label={<span className="text-bold text-secondary">Email</span>}
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input size="large" placeholder="Enter your email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label={<span className="text-bold text-secondary">Username</span>}
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" placeholder="Enter your username" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span className="text-bold text-secondary">Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <span className="text-bold text-secondary">
                  Password Confirmation
                </span>
              }
              name="confirmation"
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              dependencies={["password"]}
              hasFeedback
            >
              <Input.Password size="large" placeholder="Enter your password" />
            </Form.Item>
          </Col>
          <Col offset={6} span={6} onClick={onBack}>
            <Button size="large">
              <span>Back</span>
            </Button>
          </Col>
          <Col span={6}>
            <Form.Item
              wrapperCol={{
                span: 12,
              }}
            >
              <Button size="large" className="btn-primary" htmlType="submit">
                <span>Next</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Page;
