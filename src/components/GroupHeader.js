import React, { useEffect, useState } from "react";
import { useCustomContext } from "../context/Context";
import UserBadge from "./UserBadge";
import "../styles/GroupHeader.css";

const GroupHeader = (props) => {
  const { groupBy, data } = useCustomContext();
  const [icon, setIcon] = useState();

  useEffect(() => {
    setIcon(getIcon());
  }, [props.groupName]);
  const getIcon = () => {
    if (groupBy !== "userId") {
      return (
        <img
          src={`/assets/${groupBy}/${props.groupName}.svg`}
          alt={`${props.groupName}`}
        />
      );
    } else {
      const userName = props.groupName;
      const user = data.users.find((user) => user.name === userName);
      return <UserBadge username={userName} active={user.available} />;
    }
  };
  const words = props.groupName.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word.length === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  const finalGroupName = capitalizedWords.join(" ");
  return (
    <div className="groupHeader">
      <div className="groupInfo">
        {icon}
        &nbsp;
        <span className="groupName">{finalGroupName}</span>
        &nbsp;&nbsp;
        <span>{props.groupLength}</span>
      </div>
      <div className="groupSettings">
        <img src="/assets/plus.svg" alt="plus" />
        &nbsp;
        <img src="/assets/dots.svg" alt="dots" />
      </div>
    </div>
  );
};

export default GroupHeader;
