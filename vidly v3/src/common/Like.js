import { FaHeart, FaRegHeart } from "react-icons/fa";

import React from "react";

export default function Like({ onClick, liked }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {liked ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}
