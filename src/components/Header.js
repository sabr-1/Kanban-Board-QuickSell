import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { useCustomContext } from "../context/Context";
const Header = () => {
  const { groupBy, orderBy, setGroupBy, setOrderBy } = useCustomContext();
  const settingIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="featherSliders"
    >
      <line x1="4" y1="21" x2="4" y2="14"></line>
      <line x1="4" y1="10" x2="4" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12" y2="3"></line>
      <line x1="20" y1="21" x2="20" y2="16"></line>
      <line x1="20" y1="12" x2="20" y2="3"></line>
      <line x1="1" y1="14" x2="7" y2="14"></line>
      <line x1="9" y1="8" x2="15" y2="8"></line>
      <line x1="17" y1="16" x2="23" y2="16"></line>
    </svg>
  );

  const downArrowHead = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.matches(".dropbtn")) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleDropdownItemClick = () => {
    closeDropdown();
  };

  const handleInternalDropdownClick = (event) => {
    // Prevent the click event from propagating to the outer dropdown
    event.stopPropagation();
  };

  const handleGroupChange = (event) => {
    setGroupBy(event.target.value);
  };
  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };
  // useEffect(() => {
  //   console.log(groupBy);
  // }, [groupBy]);

  // useEffect(() => {
  //   console.log(orderBy);
  // }, [orderBy]);
  return (
    <div className="header">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="displayBox dropbtn">
          {settingIcon} Display {downArrowHead}
        </button>
        <div
          id="myDropdown"
          className={`dropdownContent ${dropdownVisible ? "show" : ""}`}
        >
          <div
            className="dropdownItem"
            onClick={handleDropdownItemClick}
            onClickCapture={handleInternalDropdownClick}
          >
            <span>Grouping</span>{" "}
            <div className="selectWrapper">
              <select value={groupBy} onChange={handleGroupChange}>
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
          </div>
          <div
            className="dropdownItem"
            onClick={handleDropdownItemClick}
            onClickCapture={handleInternalDropdownClick} // Stop propagation here
          >
            <span>Ordering</span>
            <div className="selectWrapper">
              <select value={orderBy} onChange={handleOrderChange}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
