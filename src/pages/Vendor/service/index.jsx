import { Input, Button } from 'antd';
import { VendorModal } from '../modal';
import './index.scss';

import { CardInfor } from '../../../components/CardInfor/index.jsx';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListSingleService } from '../../../redux/vendorSlice';

const { Search } = Input;

export const VendorSevice = () => {
  const [isModalEditVisible, setIsModalEditVisible] = useState(false);
  const [isModalCreateVisible, setIsModalCreateVisible] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();

  const services = useSelector((state) => state.vendor.services);

  console.log('services:', services);

  useEffect(() => {
    const getSingleService = async () => {
      try {
        const result = await dispatch(getListSingleService(3));
        const response = result.unwrapResult();
        if (response) {
          console.log('response', response);
        }
      } catch (error) {}
    };
    getSingleService();
  }, []);

  const onSearch = (value) => {
    console.log(value);
  };

  const openModalEdit = (id) => {
    setIsModalEditVisible(true);
    setEditData(services.find((item) => item.id === id));
  };

  const openModalCreate = () => {
    setIsModalCreateVisible(true);
  };

  const handleOkCreate = (value) => {
    setIsModalCreateVisible(false);
  };

  const handleCancelCreate = () => {
    console.log('cancel');
    setIsModalCreateVisible(false);
  };

  const handleOkEdit = () => {
    setIsModalEditVisible(false);
  };

  const handleCancelEdit = () => {
    setIsModalEditVisible(false);
  };

  return (
    <div>
      <div className={'vendor__service__header'}>
        <Search
          placeholder='input search text'
          onSearch={onSearch}
          style={{ width: 250 }}
          className={'vendor-service-search'}
        />
        <Button type='primary' onClick={openModalCreate}>
          Create
        </Button>
      </div>
      <div className={'vendor__service__container'}>
        {services.map((servive, index) => (
          
          <CardInfor
            textButton={'Edit'}
            key={index}
            className={'vendor__service__card'}
            handleAdd={() => openModalEdit(servive.id)}
            title={servive.serviceName}
            location={servive.price}
            imgUrl={servive?.photos.length === 0 ? '' : servive?.photos[0].url}
          />
        ))}
      </div>
      {isModalCreateVisible && (
        <VendorModal
          isModalEditVisible={isModalCreateVisible}
          handleOk={handleOkCreate}
          handleCancel={handleCancelCreate}
          editMode={false}
        />
      )}
      {isModalEditVisible && (
        <VendorModal
          isModalEditVisible={isModalEditVisible}
          handleOk={handleOkEdit}
          handleCancel={handleCancelEdit}
          editMode={true}
          editData={editData}
        />
      )}
    </div>
  );
};
