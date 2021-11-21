import React, { useState } from "react";
import { Row, Col, Form, Button, Input } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { WithContext as ReactTags } from "react-tag-input";

const Page = ({ onNext, onBack, setForm, form }) => {
  const [interestTags, setInterestTags] = useState([]);
  const [skillTags, setSkillTags] = useState([]);

  const handleInterestDelete = (i) => {
    setInterestTags(interestTags.filter((_, index) => index !== i));
  };

  const handleInterestAddition = (tag) => {
    setInterestTags([...interestTags, tag]);
  };

  const handleInterestDrag = (tag, currPos, newPos) => {
    const temp = [...interestTags];

    temp.splice(currPos, 1);
    temp.splice(newPos, 0, tag);

    setInterestTags({ temp });
  };

  const handleSkillDelete = (i) => {
    setSkillTags(skillTags.filter((_, index) => index !== i));
  };

  const handleSkillAddition = (tag) => {
    setSkillTags([...skillTags, tag]);
  };

  const handleSkillDrag = (tag, currPos, newPos) => {
    const temp = [...skillTags];

    temp.splice(currPos, 1);
    temp.splice(newPos, 0, tag);

    setSkillTags({ temp });
  };

  const handleFinish = (values) => {
    setForm((form) => ({
      ...form,
      interest: interestTags.map((e) => e.text).join("|"),
      skill: skillTags.map((e) => e.text).join("|"),
      achievement: values.achievements.join("|")
    }));

    onNext();
  };

  return (
    <div id="mentor-registration-2" style={{ padding: "5vh 8vw" }}>
      <Form
        layout="vertical"
        wrapperCol={{ span: 24 }}
        onFinish={handleFinish}
        initialValues={form}
      >
        <Form.Item
          name="interest"
          label={
            <span className="text-bold text-secondary">Area of Experties</span>
          }
          rules={[{ required: true, message: "Please enter your expertise!" }]}
        >
          <div>
            <ReactTags
              inline
              placeholder="Enter your expertises"
              tags={interestTags}
              handleDelete={handleInterestDelete}
              handleAddition={handleInterestAddition}
              handleDrag={handleInterestDrag}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="skill"
          label={<span className="text-bold text-secondary">Skills</span>}
          rules={[
            {
              required: true,
              message: "Please input your skills!",
            },
          ]}
        >
          <div>
            <ReactTags
              inline
              placeholder="Enter your skill"
              tags={skillTags}
              handleDelete={handleSkillDelete}
              handleAddition={handleSkillAddition}
              handleDrag={handleSkillDrag}
            />
          </div>
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
            <Form.Item
              label={
                <span className="text-bold text-secondary">Achievements</span>
              }
              required={true}
            >
              {fields.map((field) => (
                <div style={{margin: "8px 0px"}}>
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
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                    style={{ padding: "0 10px", fontSize: "20px" }}
                  />
                </div>
              ))}
              <Form.Item>
                <Button onClick={() => add()} icon={<PlusOutlined />}>
                  Add Achievements
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </Form.Item>
          )}
        </Form.List>
        <Row justify="center">
          <Col offset={6} span={6}>
            <Button size="large" onClick={onBack}>
              <span>Back</span>
            </Button>
          </Col>
          <Col>
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
