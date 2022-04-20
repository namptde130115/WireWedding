import { message, Modal } from 'antd';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Upload, Input, Form, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getListSingleService,
  vendorCreateSingleService,
} from '../../../redux/vendorSlice';
import { unwrapResult } from '@reduxjs/toolkit';

//firebase
import { storage } from '../../../firebase';

const { TextArea } = Input;

export const VendorModal = ({
  editMode,
  isModalEditVisible,
  handleOk,
  handleCancel,
  editData,
}) => {
  console.log('editMode', editMode);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);
  const [photos, setPhotos] = useState([]);

  const [visible, setVisible] = useState({
    previewImage: '',
    previewVisible: false,
    previewTitle: '',
  });

  useEffect(() => {
    if (editMode) {
      form.setFieldsValue({
        serviceName: editData?.serviceName,
        price: editData?.price,
        description: editData?.description,
      });
      const photos = editData.photos.map((photo, index) => {
        return {
          uid: -index,
          name: 'image',
          status: 'done',
          url: photo.url,
        };
      });
      setFileList(photos);
      setPhotos(photos);
    }
  }, [editMode, isModalEditVisible]);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const customUpload = async ({ onError, onSuccess, file }) => {
    const metadata = {
      contentType: 'image/jpeg',
    };
    const storageRef = await storage.ref();

    const imgFile = storageRef.child(`files/${file.name}.png`);
    try {
      const image = await imgFile.put(file, metadata);
      await image.ref.getDownloadURL().then((url) => {
        setPhotos((prev) => [...prev, { caption: 'photo', url: url }]);
      });
      onSuccess(null, image);
    } catch (e) {
      onError(e);
    }
  };

  // const uploadImagetoFireBase = () => {
  //   const promises = [];
  //   fileList.map((file) => {
  //     console.log('11111111111111', file);
  //     // const storageRef = ref(storage, `files/${file.name}`);
  //     const metadata = {
  //       contentType: 'image/jpeg',
  //     };
  //     const uploadTask = storage.ref(`files/${file.name}`).put(file, metadata);
  //     promises.push(uploadTask);
  //     uploadTask.on(
  //       'stage_changed',
  //       (snapshot) => {},
  //       (error) => {
  //         console.log(error);
  //       },
  //       async () => {
  //         await storage
  //           .ref('files')
  //           .child(file.name)
  //           .getDownloadURL()
  //           .then((url) => {
  //             setPhotos((prev) => [...prev, { caption: 'photo', url: url }]);
  //             console.log('url', url);
  //           });
  //       }
  //     );
  //   });
  //   Promise.all(promises)
  //     .then(() => {
  //       message.success('Upload image successfully');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleChange = ({ fileList: newFileList }) => {
    console.log('newFileList', newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    console.log('aaaaaa');
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    const imgUrl = {
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    };
    setVisible(imgUrl);
  };

  const onFinish = async (values) => {
    try {
      console.log('success: ', values);
      const submiBody = {
        ...values,
        photos: photos,
      };
      console.log(photos);
      console.log('photos:', photos);
      const actionResult = await dispatch(vendorCreateSingleService(submiBody));
      const response = unwrapResult(actionResult);
      if (response) {
        message.success('Service added successfully');
        form.resetFields();
        dispatch(getListSingleService(3));
        handleOk();
      }
    } catch (error) {
      if (error.photos) {
        message.error('Photos is required');
      }
      console.log(error);
    }
  };

  const handleCancelModal = () => {
    form.resetFields();
    handleCancel();
  };

  const handlePreviewCancel = () => {
    setVisible({ previewVisible: false });
  };

  const handleRemoveImage = (value) => {
    console.log(value);
    setPhotos(
      photos
        .filter((photo) => photo.url !== value.url)
        .map((photo) => {
          return {
            caption: 'photos',
            url: photo.url,
          };
        })
    );
  };

  console.log(photos);
  return (
    <Modal
      title='Infor Kol'
      visible={isModalEditVisible}
      onCancel={handleCancelModal}
      maskClosable={false}
      okButtonProps={{ form: 'category-editor-form', htmlType: 'submit' }}
    >
      <div className={clsx(styles.edit_container)}>
        <div className={clsx(styles.info)}>
          <div className={clsx(styles.textinfo)}>
            <Form
              form={form}
              id='category-editor-form'
              name='basic'
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              autoComplete='off'
              onFinish={onFinish}
            >
              <Form.Item
                label='Service name'
                name='serviceName'
                rules={[
                  { required: true, message: 'Please input service name!' },
                ]}
              >
                <Input className={styles.input__antd} />
              </Form.Item>
              <Form.Item
                label='Price'
                name='price'
                rules={[
                  { required: true, message: 'Please input service price!' },
                ]}
              >
                <Input type='number' className={styles.input__antd} />
              </Form.Item>
              <Form.Item
                label='Description'
                name='description'
                rules={[
                  {
                    required: true,
                    message: 'Please input service description!',
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder='Description'
                  className={styles.input__antd}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className={clsx(styles.feature)}>
          <Upload
            listType='picture-card'
            fileList={fileList}
            onChange={handleChange}
            onPreview={onPreview}
            customRequest={customUpload}
            onRemove={handleRemoveImage}
          >
            {fileList.length < 5 && '+ Upload'}
          </Upload>
          {/* <Button onClick={uploadImagetoFireBase}>Save Image</Button> */}
          <Modal
            visible={visible.previewVisible}
            title={visible.previewTitle}
            footer={null}
            onCancel={handlePreviewCancel}
          >
            <img
              alt='example'
              style={{ width: '100%' }}
              src={visible.previewImage}
            />
          </Modal>
        </div>
      </div>
    </Modal>
  );
};
