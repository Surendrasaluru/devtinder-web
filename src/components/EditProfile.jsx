import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditProfile = (userdata) => {
  //console.log(userdata);

  const [firstName, setFirstName] = useState(
    userdata ? userdata?.userdata?.firstName : ""
  );
  const [lastName, setLastName] = useState(
    userdata ? userdata?.userdata?.lastName : ""
  );
  const [about, setAbout] = useState(userdata ? userdata?.userdata?.about : "");
  const [photoUrl, setPhotoUrl] = useState(
    userdata ? userdata?.userdata?.photoUrl : ""
  );
  const dispatch = useDispatch();
  const notify = () => toast("Profile Saved");

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profileedit",
        { firstName, lastName, about, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      notify();
      //console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center mx-[20%] gap-10">
      <div className="card bg-base-500 w-96 shadow-xl">
        <div className="card-body items-left text-center">
          <h2 className="card-title">Edit Profile</h2>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">About & Skills</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              value={photoUrl}
              onChange={(e) => {
                setPhotoUrl(e.target.value);
              }}
            />
          </label>

          <button
            className="btn btn-success text-md font-bold border border-black"
            onClick={() => saveProfile()}
          >
            Save Now
          </button>
          <div>
            <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnHover={false}
              theme="dark"
              transition:Slide
            />
          </div>
        </div>
      </div>

      <UserCard
        user={{ firstName, lastName, about, photoUrl }}
        className="flex justify-right w-[30%]"
      />
    </div>
  );
};

export default EditProfile;

/**
  

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
 */
