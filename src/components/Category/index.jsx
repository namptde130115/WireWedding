import { Select } from "antd";
const { Option } = Select;
export const Category = ({ selectName, categories, handleSelect }) => {
  // const handleFilterCategory = (key) => {
  //   console.log(key);
  //   handleSelect(key);
  // };
  // const menu = (
  //   <Menu onClick={(e) => handleFilterCategory(e.key)}>
  //     {categories.map((category) => (
  //       <Menu.Item key={category.id}>{category.name}</Menu.Item>
  //     ))}
  //   </Menu>
  // );
  // return (
  //   <Dropdown overlay={menu} placement="bottomLeft" arrow>
  //     <Button>aaaa</Button>
  //   </Dropdown>
  // );

  return (
    <Select
      defaultValue={selectName}
      onChange={handleSelect}
      style={{ width: 200 }}
    >
      {categories.map((category) => (
        <Option key={category.id}>{category.name}</Option>
      ))}
    </Select>
  );
};
