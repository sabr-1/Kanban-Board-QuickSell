import React from "react";
import Card from "./Card";
import GroupHeader from "./GroupHeader";
import "../styles/Group.css";

const Group = (props) => {
  return (
    <div className="group">
      <GroupHeader
        groupName={props.groupName}
        groupLength={props.tickets.length}
      />
      {props.tickets.map((ticket, idx) => {
        return <Card key={idx} ticket={ticket} />;
      })}
    </div>
  );
};

export default Group;
