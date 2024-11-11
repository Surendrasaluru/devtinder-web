import { useDispatch } from "react-redux";
import { BASE_URL } from "../constants";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";

const UserCard = (user) => {
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err.message);
    }
  };
  //console.log(user);
  const { _id, firstName, lastName, about, photoUrl } = user.user;
  return (
    <div className="card card-side bg-base-100 w-[40%] mx-auto shadow-xl">
      <figure>
        <img src={photoUrl} alt="Profile" className="w-[250px] h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{about}</p>

        <div className="card-actions justify-end my-3">
          <button
            className="btn btn-success"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Interested
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
