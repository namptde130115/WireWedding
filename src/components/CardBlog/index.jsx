import clsx from 'clsx';
import styles from './index.module.scss';
import parse from 'html-react-parser';

export const CardBlog = ({ imgUrl, title, content, handleClick }) => {
  return (
    <div className={styles.card_blog} onClick={handleClick}>
      <img src={imgUrl} alt={'sdfasdf'} />
      <div className={styles.blog_content}>
        <p className={clsx(styles.blog_tittle)}>{title}</p>
        <div className={styles.blog_content_inner}>{parse(content)}</div>
      </div>
    </div>
  );
};
