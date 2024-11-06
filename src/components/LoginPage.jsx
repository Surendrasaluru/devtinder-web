import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

const LoginPage = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      //console.log(err.message);
      setError(err?.response?.data || "something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-500 w-96 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">LOGIN</h2>
          <div>
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
            <button className="btn btn-success" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
