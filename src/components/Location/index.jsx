import { Menu, Dropdown, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Da Nang
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Quang Nam
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        ...
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
}