import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const connection = useSelector((store) => store.connection);
  const requests = useSelector((store) => store.requests);

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
    <div className="navbar bg-base mt-3">
      <div className="flex-1">
        <Link to="/feed" className="btn btn-ghost text-xl text-white">
          devWAVE
        </Link>
      </div>
      <div className="flex gap-2">
        {user && (
          <div className=" mx-3 flex justify-stretch">
            <div className="flex list-none px-8">
              <li className="mr-12">
                <Link className="text-slate-300 hover:text-black" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="mr-12">
                <Link
                  className="text-slate-300 hover:text-black"
                  to="/connections"
                >
                  Connections ({connection && connection.length})
                </Link>
              </li>
              <li className="mr-12">
                <Link
                  className="text-slate-300 hover:text-black"
                  to="/requests"
                >
                  Requests ({requests && requests.length})
                </Link>
              </li>
              <li className="mr-12">
                <Link className="text-slate-300 hover:text-black" to="/quotes">
                  Quotebox
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  className="text-slate-300 hover:text-red-400"
                >
                  Logout
                </Link>
              </li>
            </div>
            <p className="px-12 flex justify-center mr-[2rem]">
              Welcome {user.firstName} 😍
            </p>
            <div role="button" className="btn btn-circle avatar">
              <div className="w-22 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  /*src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"*/
                  src={user.photoUrl}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

/**
 * 
 * <li>
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


              menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow



              <ul class="flex">
  <li class="mr-6">
    <Link class="text-blue-500 hover:text-blue-800" href="#">Active</Link>
  </li>
  <Link class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </Link>
  <Link class="mr-6">
    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
  </Link>
  <Link class="mr-6">
    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
  </Link>
</ul>
 */
