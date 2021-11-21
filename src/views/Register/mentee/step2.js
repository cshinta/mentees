import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Page = (props) => {
  return (
    <div id="mentor-registration-2" style={{ padding: "5vh 8vw" }}>
      <Form layout="vertical" wrapperCol={{ span: 24 }}>
        <Form.Item
          name="expertise"
          label={
            <span className="text-bold text-secondary">Area of Interests</span>
          }
          rules={[{ required: true, message: "Please enter your interests!" }]}
        >
          <Select
            placeholder="Enter your interests"
            allowClear
            size="large"
            mode="multiple"
          >
            <Select.Option value="indonesia">Indonesia</Select.Option>
            <Select.Option value="other">Not Indonesia</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="skills"
          label={<span className="text-bold text-secondary">Skills</span>}
          rules={[
            {
              required: true,
              message: "Please input your skills!",
            },
          ]}
        >
          <Select
            placeholder="Enter your skills"
            allowClear
            size="large"
            mode="multiple"
          >
            <Select.Option value="college">College</Select.Option>
            <Select.Option value="sma">High School</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="resume"
          label={<span className="text-bold text-secondary">CV/Resume</span>}
          valuePropName="fileList"
          extra=".pdf max. 2 MB"
          accept=".pdf"
        >
          <div className="text-secondary">
            This requirement is used as consideration for the mentor to accept
            you as their mentee or not.
          </div>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Row justify="center">
          <Col offset={6} span={6}>
            <Button size="large" onClick={props.onBack}>
              <span>Back</span>
            </Button>
          </Col>
          <Col span={6}>
            <Form.Item
              wrapperCol={{
                span: 12,
              }}
            >
              <Button
                size="large"
                className="btn-primary"
                htmlType="submit"
                onClick={props.onNext}
              >
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
