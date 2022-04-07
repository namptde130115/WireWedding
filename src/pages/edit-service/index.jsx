// import { ServiceLayout } from "../../layout/servicepage/index.jsx"
import clsx from "clsx";
import styles from "./index.module.scss";
import { ButtonCustom } from "../../components/ButtonCustom/index.jsx";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Modal, Input } from "antd";
import { imageUrl } from "../../assets/images-url/index";
import React, { useState } from "react";

const { TextArea } = Input;
const onChange = (e) => {
  console.log("Change:", e.target.value);
};

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const EditService = () => {
  const [isModalVisible, setIsModalVisible] = useState({});
  const handleCancel = () => {
    setIsModalVisible(false);
    setVisible({ previewVisible: false });
  };
  const showModal = (method) => {
    setIsModalVisible((prev) => {
      return { ...prev, [method]: true };
    });
  };

  const [visible, setVisible] = useState({
    previewImage: "",
    previewVisible: false,
  });
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
          <img className={clsx(styles.image)} src={imageUrl.news_img1} />
        </div>
        <div className={clsx(styles.textinfo)}>
          <div className={clsx(styles.title)}>
            <p>ABC</p>
            <ButtonCustom
              type="primary"
              text="Edit"
              onClick={() => showModal("title")}
            />
          </div>
          <div>
            <img
              className={clsx(styles.icons_location)}
              src="https://firebasestorage.googleapis.com/v0/b/gotobun-260222.appspot.com/o/Icon%2Ficon_location.png?alt=media&token=29af5c96-9413-41aa-9b3b-67d2eba337af"
            />
            <p>Da Nang</p>
          </div>
          <div>
            <p>120.000 VND</p>
            <ButtonCustom
              type="primary"
              text="Edit"
              onClick={() => showModal("price")}
            />
          </div>
          <div className={clsx(styles.description)}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque pretium dui vel gravida. Vestibulum viverra porta
              magna, ut pellentesque augue interdum nec. Integer suscipit purus
              ac porttitor gravida. Proin id urna nibh. Integer in maximus
              magna. Nam pulvinar magna et lectus sagittis, et dapibus dolor
              laoreet.
            </p>
            <ButtonCustom
              type="primary"
              text="Edit"
              onClick={() => showModal("description")}
            />
          </div>
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
      {/* Edit service */}
      <Modal
        title="Title"
        className="edit_service"
        visible={isModalVisible.title}
        onCancel={handleCancel}
      >
        <div className={clsx(styles.popup_edit)}>
          <Input placeholder="Title" />
        </div>
      </Modal>
      <Modal
        title="Price"
        className="edit_service"
        visible={isModalVisible.price}
        onCancel={handleCancel}
        // footer={null}
        // width={1000}
      >
        <div className={clsx(styles.popup_edit)}>
          <Input type="number" placeholder="0" />
        </div>
      </Modal>
      <Modal
        title="Description"
        className="edit_service"
        visible={isModalVisible.description}
        onCancel={handleCancel}
      >
        <div className={clsx(styles.popup_edit)}>
          <TextArea placeholder="Description" onChange={onChange} autoSize />
        </div>
      </Modal>
      {/* </div> */}
    </div>
  );
};
