import { SearchBar } from "../../components/Search/index.jsx";
import { Category } from "../../components/Category/index.jsx";
import { CommonLayout } from "../../layout/common/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { PriceRange } from "../../components/PriceRange/index.jsx";
import { Paging } from "../../components/Pagination/index.jsx";
import styles from "./index.module.scss";
import { imageUrl } from "../../assets/images-url/index.js";
import clsx from "clsx";
import { useEffect, useState } from "react";
import {
  getAllSingleService,
  getAllServicesByCategory,
} from "../../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { addServiceToList, getMyService } from "../../redux/customerSlice.js";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const Service = () => {
  const categories = [
    {
      id: 1,
      name: "Studio",
    },
    {
      id: 2,
      name: "Invitations",
    },
    {
      id: 3,
      name: "Dress & Attire",
    },
    {
      id: 4,
      name: "Jewelry",
    },
    {
      id: 5,
      name: "Transportation",
    },
    {
      id: 6,
      name: "Makeup",
    },
    {
      id: 7,
      name: "Musicians & Bands",
    },
    {
      id: 8,
      name: "Venues",
    },
    {
      id: 9,
      name: "Cakes",
    },
    {
      id: 10,
      name: "Lighting & Decor",
    },
    {
      id: 11,
      name: "Officiants",
    },
    {
      id: 12,
      name: "Travel Agents",
    },
    {
      id: 13,
      name: "Event Agents",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allService = useSelector((state) => state.user.allSingleService);
  useEffect(() => {
    const getAllService = async () => {
      try {
        const actionResult = await dispatch(getAllSingleService());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) { }
    };
    getAllService();
  }, []);
  const [currentCategory, setCurrentCategory] = useState();

  const handleSelectCategory = async (key) => {
    setCurrentCategory(key);
    try {
      console.log("aaaaaaaaaa");
      const actionResult = await dispatch(getAllServicesByCategory(key));
      const response = unwrapResult(actionResult);
      if (response) {
        console.log(response);
      }
    } catch (error) { }
  };

  const handleAddServiceToList = async (id) => {
    try {
      const actionResult = await dispatch(addServiceToList(id));
      const response = unwrapResult(actionResult);
      if (response) {
        dispatch(getMyService());
        console.log(response);
        message.success("Added success!");
        navigate('/planning-tools/my-servicelist');
      }
    } catch (error) { }
  };

  const handleRedictDetail = (id) => {
    navigate(`/service-detail?serviceId=${id}`)
  }
  return (
    <CommonLayout>
      <div className={clsx(styles.utility)}>
        <div className={clsx(styles.search)}>
          <SearchBar />
        </div>
        <Category
          selectName="Category"
          categories={categories}
          handleSelect={handleSelectCategory}
        />
        {/* <PriceRange /> */}
      </div>
      <div className={clsx(styles.cardholder)}>
        <div className={clsx(styles.card)}>
          {allService?.map((item) => (
            <CardInfor
              handleClick={() => handleRedictDetail(item.id)}
              key={item.id}
              showRate="5"
              imgUrl={item?.photos[0]?.url}
              avatar="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
              title={item.serviceName}
              location={item.vendorAddress}
              price={
                item.price.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                }) + " VND"
              }
              textButton="+ Add"
              handleAdd={() => handleAddServiceToList(item.id)}
            />


          ))}
        </div>
      </div>
    </CommonLayout>
  );
};
