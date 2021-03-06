import { Menu, Dropdown, Button } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Beach
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Urban
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        ...
      </a>
    </Menu.Item>
  </Menu>
);

export const Theme = ({}) => {
    return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
    <Button>Themes</Button>
    </Dropdown>
    );
}