import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { ServiceTable } from '../../components/Table/index.jsx';
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import styles from './index.module.scss';

export const ManageService = () => {
    return (
        <ServiceLayout>
            <div className={styles.table}>
                <ServiceTable/>
            </div>
            <div className={styles.addbutton}>
                <ButtonCustom
                type = "primary"
                text = "Add new Service"
                ></ButtonCustom>
            </div>
        </ServiceLayout>
    );
}
