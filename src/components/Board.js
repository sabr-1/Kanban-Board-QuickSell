import React from "react";
import "../styles/Board.css";
import { useCustomContext } from "../context/Context";
import Group from "./Group";

const Board = () => {
  const { groupNames, orderedGroups } = useCustomContext();
  const renderGroup = (group, idx) => {
    return <Group key={idx} groupName={group} tickets={orderedGroups[group]} />;
  };
  return (
    <div className="board">
      {groupNames.map((group, idx) => renderGroup(group, idx))}
    </div>
  );
};

export default Board;
