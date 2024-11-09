import axios from "axios";
import { BASE_URL } from "../constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connectionsview", {
        withCredentials: true,
      });
      await dispatch(addConnection(res?.data?.data));

      console.log(res?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) {
    return <h1>Start building your connections</h1>;
  }
  return (
    <div className="text-center">
      {connections.map((connection) => {
        const { firstName, lastName, about, photoUrl } = connection;
        return (
          <div
            key={connection._id}
            className="flex justify-center text-center flex-row"
          >
            <div className="card card-side bg-black h-60 w-80 mb-3  shadow-xl">
              <figure>
                <img src={photoUrl} alt="Profile" className="rounded-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-blue-300">
                  {firstName} {lastName}
                </h2>
                <p className="text-slate-300 text-pretty">{about}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;

/*
 <div className="card bg-base-100 image-full w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 */
