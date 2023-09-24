import React from "react";
import "../styles/UserBadge.css";
import { useTitleCasing } from "../hooks/useTitleCasing";

const UserBadge = ({ username, active }) => {
  const initials = username.slice(0, 2).toUpperCase();
  let isActive;
  if (active) {
    isActive = "Available";
  } else {
    isActive = "Not Available";
  }
  const { finalTitle } = useTitleCasing(username);
  return (
    <div className="userBadge">
      <div className="circle">{initials}</div>
      {active && <div className="active"></div>}
      {!active && <div className="inactive"></div>}
      <div className={`info ${active && "isActive"}`}>
        <p>
          {finalTitle} {isActive}
        </p>
      </div>
    </div>
  );
};

export default UserBadge;
