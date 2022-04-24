import { Select } from "antd";
const { Option } = Select;

export const PriceRange = ({selectPriceRange, priceRanges, handleSelect}) => {
  return (
    <Select
      defaultValue={selectPriceRange}
      onChange={handleSelect}
      style={{ width: 250 }}
    >
      {priceRanges.map((range) => (
        <Option key={range.id}>{range.name}</Option>
      ))}
    </Select>
  );
};
