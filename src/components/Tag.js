import React from "react";
import "../styles/Tag.css";
import { useTitleCasing } from "../hooks/useTitleCasing";

const Tag = (props) => {
  const { finalTitle } = useTitleCasing(props.tag);
  const tagIcon = (
    <svg width="17" height="15" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="4" fill="#cfcfcf" />
    </svg>
  );
  return (
    <button className="tag">
      {tagIcon}
      {finalTitle}
    </button>
  );
};

export default Tag;
