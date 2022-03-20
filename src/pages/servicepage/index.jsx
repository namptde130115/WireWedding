import { SearchBar } from '../../components/Search/index.jsx';
import { Category } from '../../components/Category/index.jsx';
import { CommonLayout } from '../../layout/common/index.jsx';
import { CardInfor } from '../../components/CardInfor/index.jsx';
import { Location } from '../../components/Location/index.jsx';
import { Paging } from '../../components/Pagination/index.jsx';
import styles from './index.module.scss';

export const Service = () => {
  return (
    <CommonLayout>
      <div className={styles.utility}>
        <div className={styles.search}>
          <SearchBar />
        </div>
        <Category />
        <Location />
      </div>
      <div className={styles.cardholder}>
        <div className={styles.card}>
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368'
            title='chup anh'
            location='Da Nang'
          />
        </div>
      </div>
    </CommonLayout>
  );
};
