import clsx from "clsx";
// import styles from "./index.module.scss";
import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

export const BlogComment = ({}) => {
  const [likesCount, setLikesCount] = useState(0);
  const [dislikesCount, setDislikesCount] = useState(0);
  const [action, setAction] = useState(null);

  return (
    <div
      style={{
        display: "block",
        width: "100%",
        padding: "0px 30px",
      }}
    >
      <Comment
        author={<a>Gourav Hammad</a>}
        // avatar={<Avatar style={{ backgroundColor: "green" }}>G</Avatar>}
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum
            quisque non tellus orci ac auctor augue mauris augue.
          </p>
        }
        actions={[
          <Tooltip title="Like">
            <span
              onClick={() => {
                setLikesCount(1);
                setDislikesCount(0);
                setAction("liked");
              }}
            >
              {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
              {likesCount}
            </span>
          </Tooltip>,
          <Tooltip title="Dislike">
            <span
              onClick={() => {
                setLikesCount(0);
                setDislikesCount(1);
                setAction("disliked");
              }}
            >
              {React.createElement(
                action === "disliked" ? DislikeFilled : DislikeOutlined
              )}
              {dislikesCount}
            </span>
          </Tooltip>,
        ]}
        datetime={"30-05-2021 11:09 AM"}
      />
    </div>
  );
};
