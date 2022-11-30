import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardItems from "./CardItems";
import { ThemeContext } from "../Contexts/ThemeProvider";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://reqres.in/api/users?page=1&per_page=4`);
      setData(await res.json());
    };
    getData();
  }, []);
  return (
    <div className="dashboard">
      <div
        className="card"
        style={{
          background: theme ? "#BBDEFB" : "#001725",
          color: theme ? "black" : "white",
          transition:"1000ms"
        }}
      >
        {data?.data?.map((el) => (
          <CardItems key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
