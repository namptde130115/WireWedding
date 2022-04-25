import { Category } from "../../components/Category/index.jsx";
import { CommonLayout } from "../../layout/common/index.jsx";
import { CardInfor } from "../../components/CardInfor/index.jsx";
import { PriceRange } from "../../components/PriceRange/index.jsx";
import { Paging } from "../../components/Pagination/index.jsx";
import styles from "./index.module.scss";
import clsx from "clsx";
import { SearchBar } from "../../components/Search/index.jsx";
import { imageUrl } from "../../assets/images-url/index.js";
import { useEffect, useState } from "react";
import {
  getAllServicePack,
  getDetailPack,
  getFilterPackByParams,
} from "../../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { ServicePackDetail } from "../servicepackdetail/index.jsx";
import { message, Input } from "antd";
import { addPackToList, getMyService } from "../../redux/customerSlice.js";
const { Search } = Input;

export const ServicePack = () => {
  const [isModalVisible, setIsModalVisible] = useState();
  const [onSearchValue, setOnSearchValue] = useState();

  const themes = [
    {
      id: 1,
      name: "Romantic",
    },
    {
      id: 2,
      name: "Alternative",
    },
    {
      id: 3,
      name: "Vintage",
    },
    {
      id: 4,
      name: "Whimsical",
    },
    {
      id: 5,
      name: "Modern",
    },
    {
      id: 6,
      name: "Rustic",
    },
    {
      id: 7,
      name: "Garden Party/Casual",
    },
    {
      id: 8,
      name: "Bohemian",
    },
    {
      id: 9,
      name: "Southern-Inspired",
    },
    {
      id: 10,
      name: "Formal/Traditional",
    },
    {
      id: 11,
      name: "Art Deco",
    },
    {
      id: 12,
      name: "Nautical",
    },
    {
      id: 13,
      name: "Eco-Friendly/Natural",
    },
    {
      id: 14,
      name: "Celestial",
    },
    {
      id: 15,
      name: "Tropical",
    },
    {
      id: 16,
      name: "Preppy",
    },
    {
      id: 17,
      name: "Christmas/Holiday",
    },
    {
      id: 18,
      name: "Travel",
    },
  ];
  const dispatch = useDispatch();

  const allPack = useSelector((state) => state.user.allServicePack);
  useEffect(() => {
    const getAllService = async () => {
      try {
        const actionResult = await dispatch(getAllServicePack());
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) { }
    };
    getAllService();
  }, []);

  useEffect(() => {
    const getSearchService = async () => {
      try {
        const actionResult = await dispatch(
          getFilterPackByParams({ keyword: onSearchValue })
        );
        const response = await unwrapResult(actionResult);
        if (response) {
          console.log(response);
        }
      } catch (error) { }
    };
    getSearchService();
  }, [onSearchValue]);

  const navigate = useNavigate();
  // const handleShowDetail = (id) => {
  //   navigate(`service-pack/${id}`);
  // };
  const handleOpenModal = () => {
    console.log("cancel");
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleCancelModal = () => {
    console.log("cancel");
    setIsModalVisible(false);
  };
  const [currentTheme, setCurrentTheme] = useState();

  // const handleSelectTheme = async (key) => {
  //   setCurrentTheme(key);
  //   try {
  //     console.log("aaaaaaaaaa");
  //     const actionResult = await dispatch(getAllServicesByTheme(key));
  //     const response = unwrapResult(actionResult);
  //     if (response) {
  //       console.log(response);
  //     }
  //   } catch (error) {}
  // };
  const handleAddPackServiceToList = async (id) => {
    try {
      const actionResult = await dispatch(addPackToList(id));
      const response = unwrapResult(actionResult);
      if (response) {
        // dispatch(addPackToList(id));
        dispatch(getMyService());
        console.log(response);
        message.success("Added pack success!");
        navigate("/planning-tools/my-servicelist");
      }
    } catch (error) { }
  };
  const handleGetDetailPack = (id) => {
    navigate(`/service-pack-detail?idPack=${id}`);
  };

  const onSearch = (value) => {
    setOnSearchValue(value);
  };
  return (
    <CommonLayout>
      <div className={styles.utility}>
        <div className={clsx(styles.search)}>
          <Search onSearch={onSearch} />
        </div>
        <Category
          selectName="Theme"
          categories={themes}
        // handleSelect={handleSelectTheme}
        />
        {/* <PriceRange /> */}
      </div>
      <div className={styles.card}>
        {allPack?.map((item) => (
          <CardInfor
            key={item.id}
            showRate={item.rate}
            imgUrl={item?.photo?.url}
            avatar={item.kolMiniResponse.url}
            title={item.name}
            location={item.kolMiniResponse.fullName}
            price={
              item.price.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              }) + " VND"
            }
            textButton="+ Add"
            handleAdd={() => handleAddPackServiceToList(item.id)}
            handleClick={() => handleGetDetailPack(item.id)}
          />
        ))}
      </div>
    </CommonLayout>
  );
};
