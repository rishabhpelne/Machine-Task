import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Sidebar from "./Sidebar";
import Dialog from "./Dialog";
import Schedule from './Schedule';

function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Listening", "Learning", "Rehearsal", "Perform"];

  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4">
        {/* Top Navbar */}
        <div className="p-4 flex justify-between items-center mb-5 mx-5">
          <ul className="flex space-x-12 overflow-x-auto">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-1 px-3 rounded-lg transition duration-300 ${
                  activeTab === tab
                    ? "bg-orange-300 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar Component */}
        <div className="box-shadow p-5">
          <div className="flex justify-between items-center p-3">
            <h2 className="text-lg md:text-3xl font-semibold">Calendar</h2>
            <p className="text-sm md:text-lg text-gray-600">Google Calendar</p>
          </div>
          <hr className="my-3 border-t border-gray-500" />

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 pr-5">
              <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                  start: "today prev,next",
                  center: "title",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"70vh"}
                dateClick={handleDateClick}
              />
            </div>

            <div className="w-full md:w-1/3 mt-5 md:mt-0">
              <Schedule />
            </div>
          </div>

          {/* Modal for FullCalendar */}
          <Dialog
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            date={selectedDate}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
