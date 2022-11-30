import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeProvider";

const CardItems = ({ id, first_name, last_name, email, avatar }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="cardItemsMain"
      style={{
        background: theme ? "white" : "#101010",
        color: theme ? "black" : "white",
        transition:"1000ms"
      }}
    >
      <img className="cardItemImg" src={avatar} alt={id} />
      <div className="cardsTitles">
        <p>
          {first_name} {last_name}
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default CardItems;
