import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Maincomp = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="p-4 m-2 flex text-center justify-center">
        <div className="flex shadow-lg">
          <div className="p-3   text-center  border-black bg-slate-300 flex-1">
            <p className="font-bold text-center">Name</p>
            <p className=" text-center">val</p>
          </div>
          <div className="p-3  text-center  border-black  bg-slate-300 flex-1">
            <p className="font-bold text-center">Number</p>
            <p className=" text-center">Numbers</p>
          </div>
          <div className="p-3  text-center  border-black  bg-slate-300 flex-1">
            <p className="font-bold text-center">Address</p>
            <p className=" text-center">address</p>
          </div>
          <div className="p-3 text-center  border-black  bg-slate-300 flex-1">
            <p className="font-bold text-center">Profile</p>
            <p className=" text-center">value</p>
          </div>
          <div className="p-3  text-center  border-black  bg-slate-300 flex-1">
            <p className="font-bold text-center">Action</p>
            <div className="text-center justify-center    bg-slate-300">
              <button className="bg-slate-400 rounded-md m-1">
                {" "}
                <IconButton onClick={() => navigate("add")}>
                  {" "}
                  <AddIcon />
                </IconButton>
              </button>
              <button className="bg-slate-400 rounded-md m-1">
                {" "}
                <IconButton>
                  {" "}
                  <EditIcon />
                </IconButton>
              </button>
              <button className="  bg-slate-400 rounded-md m-1">
                {" "}
                <IconButton>
                  {" "}
                  <DeleteIcon />
                </IconButton>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincomp;
