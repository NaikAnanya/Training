import React, { useState } from "react";
import UserList from "./userList";
import UserAdd from "./userAdd";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Ananya Naik", email: "ananya@gmail.com" },
    { id: 2, name: "Rahul Kumar", email: "rahul@gmail.com" },
  ]);

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      <UserAdd onAdd={handleAddUser} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
