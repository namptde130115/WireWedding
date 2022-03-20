import { Comment, Tooltip, List, Rate } from 'antd';
import moment from 'moment';

const data = [
  {
    author: 'Nguyen Van A',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        service rat hay
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    author: 'Nguyen Van B',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        service tam dc
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

export const Feedback = () => {
    return (
    <List
        className="comment-list"
        header={`${data.length} feedbacks`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
        <li>
            <Rate disabled defaultValue={4} />
            <Comment
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
            />
        </li>
        )}
    />
    );
}
