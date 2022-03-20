import { Menu, Dropdown, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Photo
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Costume
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        ...
      </a>
    </Menu.Item>
  </Menu>
);

export const Category = ({}) => {
    return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
    <Button>Categories</Button>
    </Dropdown>
    );
}