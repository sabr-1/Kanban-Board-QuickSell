import React from "react";
import UserBadge from "./UserBadge";
import { useCustomContext } from "../context/Context";
import "../styles/Card.css";
import Tag from "./Tag";

const Card = (props) => {
  const { data } = useCustomContext();
  const ticket = props.ticket;
  const findUser = () => {
    return data.users.find((user) => user.id === ticket.userId);
  };
  const priorities = ["No priority", "Low", "Medium", "High", "Urgent"];
  let user = findUser();
  return (
    <div className="ticketCard">
      <div className="ticketHead">
        <div className="ticketId">{ticket.id}</div>
        <UserBadge username={user.name} active={user.available} />
      </div>
      <div className="ticketTitle">{ticket.title}</div>
      <div className="ticketTags">
        <button className="priorityBtn">
          <img
            src={`/assets/priority/card/${priorities[ticket.priority]}.svg`}
            alt={`${priorities[ticket.priority]}`}
            width={"10"}
            height={"10"}
          />
          <div className="pInfo">{priorities[ticket.priority]}</div>
        </button>
        {ticket.tag.map((tag, idx) => {
          return <Tag tag={tag} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Card;
