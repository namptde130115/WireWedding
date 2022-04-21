import { Menu, Dropdown, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        {"<"} 40.000.000 VND
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        40.000.000 - 80.000.000 VND
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        80.000.000 - 120.000.000 VND
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        120.000.000 - 160.000.000 VND
      </a>
    </Menu.Item>
        <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
       {">"} 160.000.000 VND
      </a>
    </Menu.Item>
  </Menu>
);

export const Location = ({}) => {
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>Price range</Button>
    </Dropdown>
  );
};
