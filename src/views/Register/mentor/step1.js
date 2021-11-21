import React from "react";
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

const Page = ({ onNext, setForm, form }) => {
  const onFinish = (values) => {
    setForm((form) => ({
      ...form,
      ...values,
    }));

    onNext();
  };

  return (
    <div id="mentor-registration-1" style={{ padding: "0 8vw" }}>
      <Form
        layout="vertical"
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
        initialValues={form}
      >
        <Row gutter={24}>
          <Col span={24} style={{ textAlign: "center" }}>
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
              name="first_name"
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
              name="last_name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input size="large" placeholder="Enter your last name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="birth_date"
              label={
                <span className="text-bold text-secondary">Date of Birth</span>
              }
              rules={[
                { required: true, message: "Please input your date of birth!" },
              ]}
              wrapperCol={{
                span: 24,
              }}
            >
              <div className="customDatePicker">
                <DatePicker
                  size="large"
                  style={{
                    width: "100%",
                  }}
                />
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
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Others">
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
                <Select.Option value="Indonesian Citizen">
                  Indonesian Citizen
                </Select.Option>
                <Select.Option value="Non Indonesia Citizen">
                  Non Indonesia Citizen
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="current_study"
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
                <Select.Option value="High School">High School</Select.Option>
                <Select.Option value="Bachelor">Bachelor Degree</Select.Option>
                <Select.Option value="Master">Master Degree</Select.Option>
                <Select.Option value="Doctorate">Doctorate Degree</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name="university"
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
              name="major"
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
              name="bio"
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
              <Button size="large" className="btn-primary" htmlType="submit" onClick={onNext}>
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
