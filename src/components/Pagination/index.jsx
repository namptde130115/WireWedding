import { Pagination } from "antd";
import styles from "./index.module.scss";
import clsx from "clsx";
function onChange(pageNumber) {
  console.log("Page: ", pageNumber);
}

export const Paging = ({}) => {
  return (
    // <Pagination showQuickJumper defaultCurrent={1} total={50} onChange={onChange} />
    <div className={clsx(styles.paging_container)}>
      <Pagination defaultCurrent={1} total={50} onChange={onChange} />
    </div>
  );
};
