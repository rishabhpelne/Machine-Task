import React, { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        className="md:hidden p-4 text-gray-700"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block flex flex-col w-60 h-screen`}
      >
      <ul className="mt-4 flex-1 overflow-y-auto">
        <li
          className={`p-4 cursor-pointer ${
            activeMenu === "home" ? "bg-orange-100" : ""
          }`}
          onClick={() => setActiveMenu("home")}
        >
         <i className="fas fa-home mr-2"></i> Home
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeMenu === "profile" ? "bg-orange-100" : ""
          }`}
          onClick={() => setActiveMenu("profile")}
        >
          <i className="fas fa-user mr-2"></i> Profile
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeMenu === "library" ? "bg-orange-100" : ""
          }`}
          onClick={() => setActiveMenu("library")}
        >
          <i className="fas fa-book mr-2"></i> Library
        </li>
        <li className="p-4 cursor-pointer">
          <i className="fas fa-folder mr-2"></i> Collection
          <ul className="pl-4 mt-2 space-y-2">
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu1" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu1")}
            >
              <i className="fas fa-music mr-2"></i> Playlists
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu2" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu2")}
            >
              <i className="fas fa-microphone-alt mr-2"></i> Tracks
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu3" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu3")}
            >
              <i className="fas fa-user-friends mr-2"></i> Artists
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu4" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu4")}
            >
              <i className="fas fa-record-vinyl mr-2"></i> Albums
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu5" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu5")}
            >
              <i className="fas fa-list mr-2"></i> Genres
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu6" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu6")}
            >
              <i className="fas fa-calendar-alt mr-2"></i> Decades
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "submenu7" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("submenu7")}
            >
              <i className="fas fa-globe mr-2"></i> Geos
            </li>
          </ul>
        </li>
        <li
          className={`p-4 cursor-pointer ${
            activeMenu === "community" ? "bg-orange-100" : ""
          }`}
          onClick={() => setActiveMenu("community")}
        >
          <i className="fas fa-users mr-2"></i> Community
        </li>
        <li className="p-4 cursor-pointer">
          <i className="fas fa-broadcast-tower mr-2"></i> Stations
          <ul className="pl-4 mt-2 space-y-2">
            <li
              className={`cursor-pointer ${
                activeMenu === "stations1" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("stations1")}
            >
              <i className="fas fa-headphones mr-2"></i> Scheduled Listening
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "stations2" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("stations2")}
            >
              <i className="fas fa-music mr-2"></i> Music Discovery
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "stations3" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("stations3")}
            >
              <i className="fas fa-smile mr-2"></i> Positive Music
            </li>
            <li
              className={`cursor-pointer ${
                activeMenu === "stations4" ? "bg-orange-100" : ""
              }`}
              onClick={() => setActiveMenu("stations4")}
            >
              <i className="fas fa-record-vinyl mr-2"></i> Mood Regulation
            </li>
          </ul>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
