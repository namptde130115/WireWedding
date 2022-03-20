import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { Feedback } from "../../components/Feedback/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Rate } from 'antd';
import styles from './index.module.scss';

export const ServicePackDetail = () => {
    return (
        <ServiceLayout>
            <div className={styles.info}>
                <div className={styles.imageinfo}>
                    <img
                        className={styles.image}
                        src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                    />
                </div>
                <div className={styles.textinfo}>
                    <div className= {styles.title}>
                        dam cuoi starter pack
                    </div>
                    <div>
                        <img
                            className={styles.icons_location}
                            src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
                        />
                        o dau con lau moi noi
                    </div>
                    <div>
                        120.000 VND
                    </div>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque pretium dui vel gravida. 
                    Vestibulum viverra porta magna, ut pellentesque augue interdum nec. Integer suscipit purus ac porttitor gravida. 
                    Proin id urna nibh. Integer in maximus magna. Nam pulvinar magna et lectus sagittis, et dapibus dolor laoreet. 
                    </div>
                </div>
                <div className={styles.rateinfo}>
                    <Rate className={styles.rating} disabled defaultValue={4} />
                </div>
            </div>
            <div className= {styles.utility}>
                <ButtonCustom
                    type="primary"
                    text="Add"
                ></ButtonCustom>
            </div>
            <div className = {styles.packinfo}>
                Pack Content
            </div>
            <div className = {styles.feature}>
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_01.PNG?alt=media&token=1d0cfe71-8e3a-48ad-860e-6e0f0e816368"
                    title = "chup anh"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Finvitation_01.PNG?alt=media&token=5b6e8277-7a08-44a0-b7ec-eef5228fb148"
                    title = "nha hang"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Finvitation_02.PNG?alt=media&token=ac8644c1-1d3d-4241-a975-256c44b44803"
                    title = "anh chup"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fstudio_02.PNG?alt=media&token=6210bb76-9d1f-4377-a14a-915145cf0796"
                    title = "hang nha"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fvenue_01.PNG?alt=media&token=338354e8-7aaa-4f99-a39e-3102d8255274"
                    title = "quan ao"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fvenue_02.PNG?alt=media&token=7397fe57-e9fa-459d-bcee-5a2522bd6cb9"
                    title = "ao quan"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_02.PNG?alt=media&token=2da2f946-43c1-4689-b5ea-036375b02b26"
                    title = "trang tri"
                    location = "Da Nang"
                />
                <CardInfor
                    imgUrl = "https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                    title = "tri trang"
                    location = "Da Nang"
                />
            </div>
            <div className= {styles.feedback}>
                <Feedback></Feedback>
            </div>
        </ServiceLayout>
    );
}
