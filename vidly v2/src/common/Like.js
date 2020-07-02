import { FaHeart, FaRegHeart } from "react-icons/fa";

import React from "react";

export default function Like(props) {
  return (
    <div onClick={props.onClick} style={{ cursor: "pointer" }}>
      {props.liked ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
