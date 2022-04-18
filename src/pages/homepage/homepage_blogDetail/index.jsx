import clsx from "clsx";
import styles from "./index.module.scss";
import { Input } from "antd";
import { imageUrl } from "../../../assets/images-url/index.js";
import React, { useState } from "react";
import { ShareAltOutlined } from "@ant-design/icons";
import { BlogComment } from "../../../components/BlogComment/index.jsx";
import { ButtonCustom } from "../../../components/ButtonCustom/index.jsx";
import { CommonLayout } from "../../../layout/common/index.jsx";

const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};
export const HomePageBlogDetail = () => {
  return (
    <CommonLayout>
      <div className={clsx(styles.h1)}>Romantic Wedding</div>
      <div className={clsx(styles.blog_container)}>
        <div className={clsx(styles.blog_detail)}>
          <p>By LinhND</p>
          <p>March 9th, 2022</p>
        </div>
        <img
          width="80%"
          height="400"
          src="https://junebugweddings.com/wedding-blog/wp-content/uploads/2022/04/Andrea-Tappo-e-Federica-Francioli.jpg"
        />
        <div className={clsx(styles.blog_child)}>
          <p>
            Ilaria and Claudio’s Romantic wedding reflected not
            just their love for each other, but their shared passion for the
            arts, culture, and history. Set in the picturesque Umbrian
            countryside, the hill-top neoclassical estate was the staple piece
            of their romantic celebration. And with the help of their dream
            vendor team, this couple was able to bring their vision to life, in
            their dream venue, drawing inspiration from the nine muses of the
            arts.
          </p>
          <p>
            Guests were transported into a secret garden packed with airy
            delicate florals by Sartoria Floreale. Under a canopy of olive trees
            and a cobblestone stairway leading up to the backdrop, this couple
            exchanged “I dos” in this truly magical setting. From the
            picture-perfect 360 scenery to the elegant fine art details, the
            reception was equally as whimsical. Playing off their exquisite
            venue, the couple were dressed in timeless and sophisticated attire.
            The bride channeled effortless chic in her ivory wedding dress and
            cathedral veil, while the groom looked sharp in his classic suit. If
            you’ve been dreaming of a swoon-worthy getaway wedding, then you
            need to see every stunning detail and candid moment beautifully
            captured by Junebug members Andrea & Federica.
          </p>
          <p>
            Tincidunt arcu non sodales neque sodales ut etiam. Tincidunt tortor
            aliquam nulla facilisi cras fermentum odio eu. Nisl vel pretium
            lectus quam. Tincidunt arcu non sodales neque sodales ut etiam.
            Lacus vestibulum sed arcu non odio euismod lacinia. Rutrum quisque
            non tellus orci ac. In fermentum et sollicitudin ac. Mattis enim ut
            tellus elementum. Enim sit amet venenatis urna cursus eget nunc.
            Quis blandit turpis cursus in hac. Integer vitae justo eget magna
            fermentum iaculis eu. Sed libero enim sed faucibus turpis in.
            Adipiscing elit ut aliquam purus sit amet luctus. Dui id ornare arcu
            odio ut sem nulla pharetra. Et leo duis ut diam quam nulla porttitor
            massa. Amet commodo nulla facilisi nullam vehicula.
          </p>
          <div className={clsx(styles.blog_share)}>
            <p>Share now</p>
            <ShareAltOutlined />
          </div>
        </div>
        <div className={clsx(styles.comment_container)}>
          <h4>Comment</h4>
          <div className={clsx(styles.your_comment)}>
            <div className={clsx(styles.input_comment)}>
              <TextArea placeholder="Comment here" onChange={onChange} />
            </div>
            <div className={clsx(styles.btnSend)}>
              <ButtonCustom type="ghost" text="Send" />
            </div>
          </div>
          <BlogComment />
          <BlogComment />
          <BlogComment />
        </div>
        <div className={clsx(styles.btnViewMore)}>
          <ButtonCustom type="link" text="View more" />
        </div>
      </div>
    </CommonLayout>
  );
};
