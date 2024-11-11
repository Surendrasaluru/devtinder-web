import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "./Navbar";

import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profileview", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }

      //console.log(err.message);
    }
  };

  useEffect(() => {
    {
      !userData && fetchUser();
    }
  });

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
