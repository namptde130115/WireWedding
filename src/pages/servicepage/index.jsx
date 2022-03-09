import { SearchBar } from "../../components/Search/index.jsx";
import { Category } from "../../components/Category/index.jsx";
import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { CardInfor } from "../../components/CardInfor/index.jsx"
import { Location } from "../../components/Location/index.jsx"
import { Paging } from "../../components/Pagination/index.jsx";
import styles from './index.module.scss';

export const Service = () => {
    return (
        <ServiceLayout>
            <div className={styles.utility}>
                    <SearchBar/>
                    <Category/>  
                    <Location/>
            </div>
            <div className={styles.card}>
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "chup anh"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "anh chup"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "hna puhc"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "puhc hna"
                    rate = "5"
                    location = "Da Nang"
                />
            </div>
            <div className={styles.card}>
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "chup anh"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "anh chup"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "hna puhc"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "puhc hna"
                    rate = "5"
                    location = "Da Nang"
                />
            </div>
            <div className={styles.card}>
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "chup anh"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "anh chup"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "hna puhc"
                    rate = "5"
                    location = "Da Nang"
                />
                <CardInfor
                    card_img = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "puhc hna"
                    rate = "5"
                    location = "Da Nang"
                />
            </div>
            <div className={styles.paging}>
                <Paging/>
            </div>
        </ServiceLayout>
    );
}
