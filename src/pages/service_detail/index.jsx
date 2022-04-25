// import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import { ButtonCustom } from '../../components/ButtonCustom/index.jsx';
import { Feedback } from '../../components/Feedback/index.jsx';
import { Button, Rate } from 'antd';
import styles from './index.module.scss';
import { Footer } from '../../layout/footer/index.jsx';
import { Header } from '../../layout/header/index.jsx';
import { useEffect } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleServiceById } from '../../redux/customerSlice.js';

export const ServiceDetail = () => {
  const dispatch = useDispatch();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const serviceId = urlParams.get('serviceId');

  console.log(serviceId)

  const singleServiceById = useSelector((state)=> state.customer.singleServiceById)

  console.log(singleServiceById)


  useEffect(()=> {
    const getServiceById = async () => {
      try {
        const actionResult = await dispatch(getSingleServiceById(serviceId));
        const respone = unwrapResult(actionResult);
        if (respone) {
  
        }
      } catch (error) {
        
      }
    }
    getServiceById()
  },[])
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.imageinfo}>
            <img
              className={styles.image}
              src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Service%2Fdecoration_01.PNG?alt=media&token=cf7bdb9c-16cc-40ef-a90d-1395334ecee3'
            />
          </div>
          <div className={styles.textinfo}>
            <div className={styles.title}>{singleServiceById?.serviceName}</div>
            <div>
              <img
                className={styles.icons_location}
                src='https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af'
              />
              {singleServiceById?.vendorAddress}
            </div>
            <div>{singleServiceById?.price}</div>
            <div className={styles.description}>
              {singleServiceById?.description}
            </div>
          </div>
          <div className={styles.rateinfo}>
            <Rate disabled defaultValue={4} />
          </div>
        </div>
        <div className={styles.feature}>
        {singleServiceById?.photos?.map((photo, index)=> (
          <div className={styles.img__container} key={index}>
            <img className={styles.thumbnail} src={photo?.url}/>
          </div>
         ))}
        </div>
        {/* <div className={styles.feedback}>
          <Feedback></Feedback>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};
