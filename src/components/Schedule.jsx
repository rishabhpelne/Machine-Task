import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Schedule = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="">
        <DateCalendar />
        <h4 className="text-sm md:text-lg font-semibold mt-4">Schedule</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 mt-4 whitespace-nowrap">
          <button className="bg-red-300 hover:bg-red-600 text-white text-sm px-2 rounded">Listen</button>
          <button className="bg-blue-300 hover:bg-blue-600 text-white text-sm px-2 rounded">Learn</button>
          <button className="bg-green-300 hover:bg-green-600 text-white text-sm px-2 rounded">Work-Out</button>
          <button className="bg-yellow-300 hover:bg-yellow-600 text-white text-sm px-2 rounded">Study</button>
          <button className="bg-purple-300 hover:bg-purple-600 text-white text-sm px-2 rounded">Practice</button>
          <button className="bg-pink-300 hover:bg-pink-600 text-white text-sm px-2 rounded">Other</button>
          <button className="bg-orange-300 hover:bg-orange-600 text-white text-sm px-2 rounded">Work-Out</button>
          <button className="bg-teal-300 hover:bg-teal-600 text-white text-sm px-2 rounded">Study</button>
          <button className="bg-indigo-300 hover:bg-indigo-600 text-white text-sm px-2 rounded">Listen</button>
          <button className="bg-blue-300 hover:bg-blue-600 text-white text-sm px-2 rounded">Learn</button>
          <button className="bg-green-300 hover:bg-green-600 text-white text-sm px-2 rounded">Work-Out</button>
          <button className="bg-gray-300 hover:bg-gray-600 text-white text-sm px-2 rounded">Study</button>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Schedule;
