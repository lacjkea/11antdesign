import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

export default function Trin() {
  const description = "This is a description.";
  return (
    <Steps
      size="small"
      current={1}
      items={[
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
      ]}
    />
  );
}
