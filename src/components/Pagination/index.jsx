import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export const Paging = ({}) => {
    return (
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    )
}
    