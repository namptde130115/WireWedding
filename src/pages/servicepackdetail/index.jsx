import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { Feedback } from "../../components/Feedback/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Button, Rate } from "antd";
import styles from "./index.module.scss";
import { Header } from "../../layout/header/index.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServicesInPack, getDetailPack } from "../../redux/userSlice.js";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const ServicePackDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idPack = urlParams.get("idPack");
  const packDetails = useSelector((state) => state.user.packDetail);

  useEffect(() => {
    const getAllDetailPack = async () => {
      try {
        const actionResult = await dispatch(getDetailPack(idPack));
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getAllDetailPack();
  }, []);

  const singleInPack = useSelector((state) => state.user.allSingleInPack);
  console.log("singleInPack", singleInPack);

  useEffect(() => {
    const getServicesInPack = async () => {
      try {
        const actionResult = await dispatch(getAllServicesInPack(idPack));
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getServicesInPack();
  }, []);

  const handleNavigateDetail = (id) => {
    navigate(`/service-detail?ServiceId=${id}`);
  };
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.imageinfo}>
            <img className={styles.image} src={packDetails?.photo?.url} />
          </div>
          <div className={styles.textinfo}>
            <div className={styles.title}>{packDetails?.name}</div>
            <div>
              {packDetails?.kolMiniResponse?.url && (
                <img
                  className={styles.icons_location}
                  src={packDetails?.kolMiniResponse?.url}
                />
              )}
              {packDetails?.kolMiniResponse?.fullName}
            </div>
            <div>
              {packDetails?.price?.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              }) + " VND"}
            </div>
            <div>{packDetails?.description}</div>
          </div>
          <div className={styles.rateinfo}>
            <Rate className={styles.rating} disabled defaultValue={4} />
            {/* <Button type="primary">Add</Button> */}
          </div>
        </div>

        <div className={styles.packinfo}>Pack Content</div>
        <div className={styles.feature}>
          {Array.isArray(singleInPack) &&
            singleInPack?.map((item) => (
              <CardInfor
                onClick={() => handleNavigateDetail(item.id)}
                key={item.id}
                showRate="5"
                title={item?.name}
                imgUrl={Array.isArray(item?.photos) && item?.photos[0]?.url}
                // avatar={item?.vendorAddress} ti uyen cop
                location={item?.vendorAddress}
                price={
                  item?.price &&
                  item?.price.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  }) + " VND"
                }
                // textButton="+ Add"
              />
            ))}
        </div>
        {/* <div className={styles.feedback}>
        <Feedback></Feedback>
      </div> */}
      </div>
    </div>
  );
};
