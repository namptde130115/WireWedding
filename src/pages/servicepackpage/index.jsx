import { Theme } from "../../components/Theme/index.jsx";
import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { CardInfor } from "../../components/CardInfor/index.jsx"
import { Location } from "../../components/Location/index.jsx"
import { Paging } from "../../components/Pagination/index.jsx";
import styles from './index.module.scss';

export const ServicePack = () => {
    return (
        <ServiceLayout>
            <div className={styles.utility}>
                    <Theme/>  
                    <Location/>
            </div>
            <div className={styles.card}>
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "dam cuoi o bien starter pack"
                    location = "Da Nang"
                />
            </div>
            <div className={styles.paging}>
                <Paging/>
            </div>
        </ServiceLayout>
    );
}
