import axios from "axios";
import { BASE_URL } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestsSlice";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });

      await dispatch(addRequests(res.data.connectionRequests));
      //console.log(res.data);
      //console.log(res.data.connectionRequests);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests) return;
  if (requests.length === 0) {
    return <h1> You have no connection requests</h1>;
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
                  <button className="btn btn-success">Accept</button>
                  <button className="btn btn-error">Reject</button>
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

/*<div className="card card-side bg-black h-60 w-80 mb-3  shadow-xl">
              <figure>
                <img src={photoUrl} alt="Profile" className="rounded-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-300">
                  {firstName} {lastName}
                </h2>
                <button className="btn btn-success">Interested</button>
                <button className="btn btn-error">Ignore</button>
                <p className="text-slate-300 text-pretty">{about}</p>
              </div>
            </div>
*/
