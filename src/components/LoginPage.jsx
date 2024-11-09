import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const LoginPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      await dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      //console.log(err.message);
      setError(err?.response?.data || "something went wrong");
    }
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          emailId,
          firstName,
          lastName,
          password,
        },
        { withCredentials: true }
      );
      await dispatch(addUser(res.data.data));
      //console.log(res);
      return navigate("/profile");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex justify-center mt-3 h-auto">
      <div className="shadow-2xl shadow-slate-900 mx-auto text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md mt-20 py-10 px-8 rounded-xl">
        <div className="">
          <div className="flex space-x-28">
            <h2 className="card-title">{isLoginForm ? "LOGIN" : "SIGNUP"}</h2>
            <input
              type="checkbox"
              className="toggle"
              defaultChecked
              onChange={() => handleToggle()}
            />
          </div>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">FIRST NAME</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-80"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">LAST NAME</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-80"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">EMAIL ID</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-80"
                onChange={(e) => {
                  setEmailId(e.target.value);
                }}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">PASSWORD</span>
              </div>
              <input
                type="text"
                value={password}
                className="input input-bordered w-full max-w-80"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
          </div>
          <p className="text-red-400">{error}</p>

          <div className="card-actions justify-center">
            <button
              className="btn btn-success"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "LOGIN" : "SIGNUP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

/*
shadow-2xl shadow-slate-900 mx-auto text-white bg-clip-padding backdrop-filter bg-white bg-opacity-10 backdrop-blur-md mt-20 py-10 px-8 rounded-md

*/
/**
 card bg-base-500 w-96 shadow-xl
 card-body items-center text-center
 */
