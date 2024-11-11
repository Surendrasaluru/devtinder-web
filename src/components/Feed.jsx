import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../constants";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  //console.log(feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      //console.log(res);
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err.messge);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length === 0) return <h1>NO NEW USERS FOUND VISIT US LATER 😢</h1>;

  return (
    feed && (
      <div className="flex justify-between">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
