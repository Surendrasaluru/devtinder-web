import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestsSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequests(_id));
    } catch (err) {
      console.log(err.message);
    }
  };
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });

      await dispatch(addRequests(res.data.connectionRequests));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) {
    return (
      <div className=" px-4 py-3 flex items-center flex-col" role="alert">
        <p className="font-bold">No Connection Requests</p>
        <p className="text-sm">No Requests avaialble at this moment!</p>
      </div>
    );
  }
  //console.log(requests);
  return (
    <div className="text-center">
      <h1>connection requests</h1>
      {requests.map((request) => {
        const { firstName, lastName, about, photoUrl } = request.fromUserId;

        return (
          <div
            key={request._id}
            className="flex justify-center text-center flex-row"
          >
            <div className="card card-side w-140 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={photoUrl}
                  alt="Profile"
                  className="rounded-full w-40"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {firstName} {lastName}
                </h2>
                <p>{about}</p>

                <div className="card-actions justify-end my-3">
                  <button
                    className="btn btn-success"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
