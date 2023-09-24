import React, { createContext, useContext, useState, useEffect } from "react";

const myContext = createContext();

const Context = ({ children }) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState(
    () => localStorage.getItem("groupBy") || "status"
  );
  const [orderBy, setOrderBy] = useState(
    () => localStorage.getItem("orderBy") || "priority"
  );
  const [orderedGroups, setOrderedGroups] = useState({});
  const [groupNames, setGroupNames] = useState([]);
  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
    localStorage.setItem("orderBy", orderBy);
  }, [groupBy, orderBy]);

  return (
    <myContext.Provider
      value={{
        groupBy,
        orderBy,
        setGroupBy,
        setOrderBy,
        orderedGroups,
        setOrderedGroups,
        data,
        setdata,
        error,
        setError,
        groupNames,
        setGroupNames,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

const useCustomContext = () => {
  return useContext(myContext);
};

export { Context, useCustomContext };
