import React, { useEffect } from "react";
import Header from "./components/Header";
import { useCustomContext } from "./context/Context";
import Toast from "./components/Toast";
import Board from "./components/Board";
import "./styles/App.css";
const App = () => {
  const {
    groupBy,
    orderBy,
    setOrderedGroups,
    data,
    setdata,
    error,
    setError,
    setGroupNames,
  } = useCustomContext();
  const getData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}`);
      const data1 = await res.json();
      setdata(data1);
    } catch (e) {
      setError("Failed to fetch data from the API");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const groupNamesByStatus = [
    "Backlog",
    "Todo",
    "In progress",
    "Done",
    "Canceled",
  ];
  let groupNamesByUserId = [];
  const groupNamesByPriority = [
    "No priority",
    "Urgent",
    "High",
    "Medium",
    "Low",
  ];

  useEffect(() => {
    function fetchOrderedGroups() {
      const tickets = data.tickets;
      const users = data.users;
      const groupedTicketsBy = {};
      if (!data || !tickets) {
        return groupedTicketsBy;
      }
      let groupByKeys;
      if (groupBy === "status") {
        groupByKeys = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
      } else if (groupBy === "priority") {
        groupByKeys = ["No priority", "Low", "Medium", "High", "Urgent"];
      } else {
        groupByKeys = [];
      }
      for (let i = 0; i < groupByKeys.length; i++) {
        groupedTicketsBy[groupByKeys[i]] = [];
      }
      for (const ticket of tickets) {
        let groupByValue = ticket[groupBy];

        if (groupBy === "userId") {
          groupByValue = users.find((user) => user.id === groupByValue).name;
        }
        if (groupBy === "priority") {
          groupByValue = groupByKeys[groupByValue];
        }
        if (!groupedTicketsBy[groupByValue]) {
          groupByKeys.push(groupByValue);
          groupedTicketsBy[groupByValue] = [];
        }

        groupedTicketsBy[groupByValue].push(ticket);
      }
      for (const groupByValue in groupedTicketsBy) {
        groupedTicketsBy[groupByValue] = groupedTicketsBy[groupByValue].sort(
          (ticket1, ticket2) => {
            if (orderBy === "priority") {
              return ticket2.priority - ticket1.priority;
            } else if (orderBy === "title") {
              return ticket1.title.localeCompare(ticket2.title);
            } else {
              return 0;
            }
          }
        );
      }
      if (groupBy === "userId") {
        groupNamesByUserId = groupByKeys.sort((a, b) => {
          return a.localeCompare(b);
        });
      }
      let newGroupNames = [];
      if (groupBy === "status") {
        newGroupNames = groupNamesByStatus;
      } else if (groupBy === "userId") {
        newGroupNames = groupNamesByUserId;
      } else if (groupBy === "priority") {
        newGroupNames = groupNamesByPriority;
      }

      setGroupNames(newGroupNames);
      return groupedTicketsBy;
    }
    const orderedGroupsResponse = fetchOrderedGroups();
    setOrderedGroups(orderedGroupsResponse);
  }, [groupBy, data, orderBy]);
  return (
    <div className="App">
      <Header />
      {error && <Toast message={error} onClose={() => setError(null)} />}
      <Board />
    </div>
  );
};

export default App;
