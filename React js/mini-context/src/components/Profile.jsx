import React, { useContext } from "react";
import userContext from "../contexts/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 text-red-800 rounded-md shadow">
        Please login
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-green-100 text-green-800 rounded-md shadow">
      Welcome <span className="font-semibold">{user.username}</span>
    </div>
  );
};

export default Profile;
