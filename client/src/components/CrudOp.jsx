import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
const CrudOp = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    name: "",
    number: "",
    address: "",
    profile: "",
  });

  //handle it for changes in input field..

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8003/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const responseData = await response.json();
      console.log("User created:", responseData);
    } catch (error) {
      console.log("Error creating user:", error.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  return (
    <div className="p-4">
      <div className="text-center justify-center">
        <form className="grid grid-cols-2 gap-1" onSubmit={handleSubmit}>
          <div className="flex flex-col border border-gray-700">
            <label className="p-2 m-2 border border-gray-700"> Name</label>
            <label className="p-2 m-2 border border-gray-700"> Number</label>
            <label className="p-2 m-2 border border-gray-700"> Address</label>
            <label className="p-2 m-2 border border-gray-700"> Profile</label>
          </div>
          <div className="flex flex-col border border-gray-700">
            <input
              type="text"
              className="p-2 m-2 border border-gray-700"
              placeholder="enter the name "
              name="name"
              value={formdata.name}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              className="p-2 m-2 border border-gray-700"
              placeholder="enter your no "
              name="number"
              value={formdata.number}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              className="p-2 m-2 border border-gray-700"
              placeholder="enter your address "
              name="address"
              value={formdata.address}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              className="p-2 m-2 border border-gray-700"
              placeholder="enter your profile "
              name="profile"
              value={formdata.profile}
              onChange={handleChange}
            ></input>
          </div>
          <div className="text-center justify-center  mt-4">
            <div className="flex ">
              <button className="bg-slate-500 text-white px-4 py-2 mr-2 rounded-lg hover:bg-slate-400 ">
                <IconButton>Submit</IconButton>
              </button>
              <button className="bg-slate-500 text-white px-4 py-2 mr-2 rounded-lg hover:bg-slate-400 ">
                <IconButton onClick={() => navigate("/")}>
                  {" "}
                  <HomeIcon />{" "}
                </IconButton>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrudOp;
