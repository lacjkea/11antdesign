import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
const description = "Some desc";
const steps = [
  {
    title: "Finished",
    description,
    content: "First content",
    icon: <UserOutlined />,
    status: "finish",
  },
  {
    title: "In Progress",
    description,
    subTitle: "Left 00:00:08",
    content: "2nd content",
    icon: <SolutionOutlined />,
    status: "process",
  },
  {
    title: "Waiting",
    description,
    content: "3rd content",
    icon: <LoadingOutlined />,
    status: "wait",
  },
  {
    title: "Done",
    description,
    content: "4th content",
    icon: <SmileOutlined />,
    status: "wait",
  },
];
export default function Trin2() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
}
