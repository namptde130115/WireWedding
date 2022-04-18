import { SearchBar } from '../../components/Search/index.jsx';
import { Category } from '../../components/Category/index.jsx';
import { CommonLayout } from '../../layout/common/index.jsx';
import { CardInfor } from '../../components/CardInfor/index.jsx';
import { Location } from '../../components/Location/index.jsx';
import { Paging } from '../../components/Pagination/index.jsx';
import styles from './index.module.scss';
import { imageUrl } from '../../assets/images-url/index.js';

export const Service = () => {
  return (
    <CommonLayout>
      <div className={clsx(styles.utility)}>
        <div className={clsx(styles.search)}>
          <SearchBar />
        </div>
        <Category />
        <Location />
      </div>
      <div className={clsx(styles.cardholder)}>
        <div className={clsx(styles.card)}>
          <CardInfor
            imgUrl={imageUrl.studio_01}
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl={imageUrl.studio_02}
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl={imageUrl.decoration_01}
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl={imageUrl.decoration_02}
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl={imageUrl.invitation_01}
            title='chup anh'
            location='Da Nang'
          />
          <CardInfor
            imgUrl={imageUrl.invitation_02}
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
