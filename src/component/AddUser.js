import React, { useState } from "react";

import { Link } from "react-router-dom";
const AddUser = ({ addContactHandler }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === "" || user.email.trim() === "") {
      alert("All fields are mandatory");
      return;
    }

    
    addContactHandler(user);

   
    setUser({ name: "", email: "" });
  };

  return (
    <div className="ui-form">
      <center>
        <form className="ui-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Name :</label>
            <br />
            <input
              type="text"
              placeholder="Enter name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email :</label>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div>
          <button className="button">Add</button>

          
          </div>
          <Link to="/"><button className="button">Go to contatist</button></Link>
        </form>
      </center>
    </div>
  );
};

export default AddUser;
