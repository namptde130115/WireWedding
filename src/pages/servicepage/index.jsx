import { SearchBar } from "../../components/Search/index.jsx";
import { Category } from "../../components/Category/index.jsx";
import { CommonLayout } from "../../layout/common/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { Location } from "../../components/Location/index.jsx";
import { Paging } from "../../components/Pagination/index.jsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../assets/images-url/index.js";
import clsx from "clsx";
import { useEffect } from "react";
import { getAllSingleService } from "../../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

export const Service = () => {

  const dispatch = useDispatch();

  const allService = useSelector((state) => state.user.allSingleService);
  console.log('allSingleService: ', allService);
  useEffect(() => {
    const getAllService = async () => {
      try {
        const actionResult = await dispatch(getAllSingleService());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) {}
    };
    getAllService();
  }, []);

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
          {allService?.map((item) => (
            <CardInfor
              key={item.id}
              showRate="5"
              imgUrl={item?.photos[0]?.url}
              title={item.serviceName}
              location="Da Nang"
              price={item.price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              textButton="+ Add"
            />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};
