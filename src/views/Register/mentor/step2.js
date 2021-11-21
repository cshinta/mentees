import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Input,
  Select,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Page = (props) => {
  return (
    <div id="mentor-registration-2" style={{ padding: "5vh 8vw" }}>
      <Form layout="vertical" wrapperCol={{ span: 24 }}>
        <Form.Item
          name="expertise"
          label={
            <span className="text-bold text-secondary">Area of Expertise</span>
          }
          rules={[{ required: true, message: "Please enter your expertises!" }]}
        >
          <Select
            placeholder="Enter your expertises"
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
        <Form.List
          name="achievements"
          rules={[
            {
              required: true,
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={
                    index === 0 ? (
                      <span className="text-bold text-secondary">
                        Achievements
                      </span>
                    ) : (
                      ""
                    )
                  }
                  required={true}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={["onChange", "onBlur"]}
                    rules={[
                      {
                        required: true,
                        whitespace: true,
                        message:
                          "Please input achievements or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input
                      placeholder="Achievements"
                      style={{ width: "60%" }}
                    />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                      style={{ padding: "0 10px", fontSize: "20px" }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                  
                >
                  Add Achievements
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
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
              <Button size="large" className="btn-primary" htmlType="submit" onClick={props.onNext}>
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
