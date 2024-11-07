import { useSelector } from "react-redux";

import EditProfile from "./EditProfile";

const Profile = () => {
  //const dispatch = useDispatch();
  const userdata = useSelector((store) => store.user);
  //console.log(userData?.firstName, userData?.lastName);
  return (
    userdata && (
      <div className="flex justify-center my-4">
        <EditProfile userdata={userdata} />
      </div>
    )
  );
};

export default Profile;
