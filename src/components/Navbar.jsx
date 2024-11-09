import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
      return;
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log(user);
  return (
    <div className="navbar bg-base">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl text-white">
          devWAVE
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user && (
          <div className="dropdown dropdown-end mx-5 flex items-center">
            <p className="px-12 flex justify-center mr-[7rem]">
              Welcome {user.firstName} start waving now!
            </p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-22 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  /*src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"*/
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/connections" className="justify-between">
                  Connections
                  <span className="badge">0</span>
                </Link>
              </li>
              <li>
                <Link to="/requests" className="justify-between">
                  Requests
                  <span className="badge">0</span>
                </Link>
              </li>

              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
