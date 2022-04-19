import { Menu, Dropdown, Button } from "antd";
const categories = [
  {
    id: 1,
    name: "Studio",
  },
  {
    id: 2,
    name: "Invitations",
  },
  {
    id: 3,
    name: "Dress & Attire",
  },
  {
    id: 4,
    name: "Jewelry",
  },
  {
    id: 5,
    name: "Transportation",
  },
  {
    id: 6,
    name: "Makeup",
  },
  {
    id: 7,
    name: "Musicians & Bands",
  },
  {
    id: 8,
    name: "Venues",
  },
  {
    id: 9,
    name: "Cakes",
  },
  {
    id: 10,
    name: "Lighting & Decor",
  },
  {
    id: 11,
    name: "Officiants",
  },
  {
    id: 12,
    name: "Travel Agents",
  },
  {
    id: 13,
    name: "Event Agents",
  },
];
const menu = (
  <Menu>
    {categories.map((category) => (
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {category.name}
        </a>
      </Menu.Item>
    ))}
  </Menu>
);

export const Category = (data) => {
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>Categories</Button>
    </Dropdown>
  );
};
