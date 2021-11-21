import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  DatePicker,
  Upload,
  Select,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Page = () => {
  return (
    <div id="mentor-registration-1" style={{ padding: "0 8vw" }}>
      <Form layout="vertical" wrapperCol={{ span: 24 }}>
        <Row gutter={24}>
          <Col span={24}>
            <Form.Item name="upload" valuePropName="fileList">
              <Upload
                name="avatar"
                listType="picture-card"
                style={{ width: "300px", height: "300px" }}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload Display Picture</div>
                </div>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <span className="text-bold text-secondary">First Name</span>
              }
              name="firstname"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input size="large" placeholder="Enter your first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <span className="text-bold text-secondary">Last Name</span>
              }
              name="lastname"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input size="large" placeholder="Enter your last name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={
                <span className="text-bold text-secondary">Date of Birth</span>
              }
              name="birthdate"
              rules={[
                { required: true, message: "Please input your date of birth!" },
              ]}
              wrapperCol={{
                span: 24,
              }}
            >
              <div className="customDatePicker">
                <DatePicker size="large" />
              </div>
            </Form.Item>
          </Col>
          <Col span={12} style={{ padding: "0 10px" }}>
            <Form.Item
              name="gender"
              label={<span className="text-bold text-secondary">Gender</span>}
              rules={[{ required: true, message: "Please input your gender!" }]}
            >
              <Select placeholder="Choose your gender" allowClear size="large">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="other">
                  Prefer not to disclose
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="nationality"
              label={
                <span className="text-bold text-secondary">Nationality</span>
              }
              rules={[
                { required: true, message: "Please input your nationality!" },
              ]}
            >
              <Select
                placeholder="Choose your nationality"
                allowClear
                size="large"
              >
                <Select.Option value="indonesia">Indonesia</Select.Option>
                <Select.Option value="other">Not Indonesia</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="study"
              label={
                <span className="text-bold text-secondary">
                  Current Level of Study
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your current level of study!",
                },
              ]}
            >
              <Select
                placeholder="Choose your current level of study"
                allowClear
                size="large"
              >
                <Select.Option value="college">College</Select.Option>
                <Select.Option value="sma">High School</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="school"
              label={
                <span className="text-bold text-secondary">
                  School/University/Company
                </span>
              }
              rules={[
                {
                  required: true,
                  message:
                    "Please enter the name of your school/university/company !",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter the name of your school/university/company"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="position"
              label={
                <span className="text-bold text-secondary">
                  Major/Job Position
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please enter your major/job position !",
                },
              ]}
            >
              <Input size="large" placeholder="Enter your major/job position" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="biodata"
              label={<span className="text-bold text-secondary">Bio</span>}
              rules={[
                {
                  required: true,
                  message: "Please enter your bio !",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter your bio" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 12,
              }}
            >
              <Button size="large" className="btn-primary">
                <span style={{ textAlign: "center", width: "100%" }}>Next</span>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Page;
