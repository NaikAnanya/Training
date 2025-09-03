import React from "react";
import "./userCard.css";

const UserCard = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <button onClick={() => onDelete(user.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default UserCard;
