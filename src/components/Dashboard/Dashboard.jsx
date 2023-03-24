import React from "react";
import "./dashboard.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

const Dashboard = () => {
  const List = () => {
    return (
      <div className="dashboard__list-card">
        <BsFillTrashFill />
        <BiEdit />
        <h4>Eat Breakfast</h4>
        <desc>
          Go Foods like egg, bacon, and rice for an energetic morning.
        </desc>
        <p className="dashboard__list-date">08-23-2023</p>
      </div>
    );
  };
  return (
    <div className="container dashboard__container">
      <div className="dashboard__card-form">
        <div className="login__input-field">
          <label>Title</label>
          <input type={"text"} />
        </div>
        <div className="login__input-field">
          <label>Description</label>
          <input type={"text"} />
        </div>
        <div className="login__input-field">
          <label>Date</label>
          <input type={"date"} />
        </div>
        <div className="login__button-container">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
      <div className="dashboard__list-container">
        <List />
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Dashboard;
