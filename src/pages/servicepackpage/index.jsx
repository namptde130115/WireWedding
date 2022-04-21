import { Theme } from "../../components/Theme/index.jsx";
import { CommonLayout } from "../../layout/common/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Location } from "../../components/Location/index.jsx";
import { Paging } from "../../components/Pagination/index.jsx";
import styles from "./index.module.scss";
import clsx from "clsx";
import { SearchBar } from "../../components/Search/index.jsx";
import { imageUrl } from "../../assets/images-url/index.js";

export const ServicePack = () => {
  return (
    <CommonLayout>
      <div className={styles.utility}>
        <div className={clsx(styles.search)}>
          <SearchBar />
        </div>
        <Theme />
        <Location />
      </div>
      <div className={styles.card}>
        <CardInfor
          imgUrl={imageUrl.studio_01}
          showRate="5"
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.studio_02}
          showRate={5}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.decoration_01}
          showRate={4.5}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.decoration_02}
          showRate={4}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.invitation_01}
          showRate={4}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.invitation_02}
          showRate={4}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.invitation_02}
          showRate={4}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
        <CardInfor
          imgUrl={imageUrl.invitation_02}
          showRate={4}
          title="chup anh"
          location="Da Nang"
          price="8.000.000 VND"
          textButton="+ Add"
        />
      </div>
    </CommonLayout>
  );
};
