import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { Feedback } from "../../components/Feedback/index.jsx";
import styles from './index.module.scss';

export const ServiceDetail = () => {
    return (
        <ServiceLayout>
            <div className={styles.info}>
                <div>
                    <img
                        className={styles.image}
                        src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                    />
                </div>
                <div>
                    <div className= {styles.title}>
                        ABC
                    </div>
                    <div>
                        <img
                            className={styles.icons_location}
                            src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
                        />
                        Da Nang
                    </div>
                    <div>
                        120.000 VND
                    </div>
                    <div>
                        aoeuhaohnutshoantuhoenatsuhnsaoehunstoeahuntsoeauntshoenstuhoaenstuaoenstuheonsuh
                    </div>
                </div>
            </div>
            <div className= {styles.utility}>
                <ButtonCustom
                type="primary"
                text="Add"
                ></ButtonCustom>
            </div>
            <div className = {styles.feature}>
                <img
                    className={styles.thumbnail}
                    src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                />
                <img
                    className={styles.thumbnail}
                    src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                />
                <img
                    className={styles.thumbnail}
                     src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3"
                />
            </div>
            <div className= {styles.feedback}>
                <Feedback></Feedback>
            </div>
        </ServiceLayout>
    );
}
