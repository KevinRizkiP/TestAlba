import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Profile = ({ res }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token", JSON.stringify(res?.data?.token));
    navigate("/");
  };
  const getToken = localStorage.getItem("token");
  return (
    <div>
      <NavBar />
      <div className="lg:max-w-7xl mx-auto items-center justify-center lg:mt-64 mt-14">
        <div className="w-full border border-gray-300 rounded-xl p-12 flex flex-col justify-left items-center h-full">
          <div className="flex flex-col justify-center text-center">
            <div className="bg-gray-300 w-44 h-44 rounded-full"></div>
            <div className="mt-5">
              <div className="flex items-center gap-3">
                <p className="text-yellow-300 font-bold text-lg">{getToken}</p>
              </div>
              <button
                onClick={logout}
                className="bg-transparent border border-black px-12 py-5 rounded-full font-bold mt-5 hover:bg-yellow-300 hover:border-yellow-300"
              >
                LogOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
