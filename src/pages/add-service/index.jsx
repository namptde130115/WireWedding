// import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import clsx from "clsx";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { Upload, Modal, Input, Form, Button } from "antd";
import { imageUrl } from "../../assets/images-url/index";
import React, { useState } from "react";


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const AddService = () => {
  const [visible, setVisible] = useState({
    previewImage: "",
    previewVisible: false,
  });
  const handleCancel = () => {

    setVisible({ previewVisible: false });
  };

  const [serviceImage, setServiceImage] = useState();
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onChange1 = ({ serviceImage }) => {
    setServiceImage(serviceImage);
  };
  const onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    const imgUrl = {
      previewImage: file.url || file.preview,
      previewVisible: true,
    };
    setVisible(imgUrl);
  };

  return (
    // <ServiceLayout>
    <div className={clsx(styles.edit_container)}>
      <div className={clsx(styles.info)}>
        <div className={clsx(styles.imageinfo)}>
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={serviceImage}
            onChange={onChange1}
            onPreview={onPreview}
          >
            {serviceImage ? <img src={serviceImage} alt="avatar" style={{ width: '100%' }} /> : "+ Upload"}
            {/* {fileList.length < 2 && "+ Upload"} */}
            {/* {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
          </Upload>
        </div>
        <div className={clsx(styles.textinfo)}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            // onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Service name"
              name="serviceName"
              rules={[
                { required: true, message: "Please input service name!" },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                { required: true, message: "Please input service price!" },
              ]}
            >
              <Input type="number" className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input service description!",
                },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
              <Button type="primary" htmlType="submit">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={clsx(styles.feature)}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </div>
      {/* Preview image */}
      <Modal
        visible={visible.previewVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{ width: "100%" }}
          src={visible.previewImage}
        />
      </Modal>
    </div>
  );
};
