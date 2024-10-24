import React from "react";

const Dialog = ({ isOpen, onClose, date }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded dialog-box shadow-md w-1/3">
          <p className="mt-2 text-lg font-bold flex items-center py-3">
            <i
              className="fa fa-calendar mr-2 bg-orange-500 p-3 text-white rounded"
              style={{ fontSize: "30px" }}
              aria-hidden="true"
            />

            {date.toLocaleDateString()}
          </p>
          <h2 className="text-xl font-semibold">
            Upcoming song for morning prayers
          </h2>
          <p className="mt-2 text-gray-500 line-clamp-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="mt-2 text-lg">To be played in (15 min)</p>

          <h3 className="mt-4 text-lg font-semibold">Playlist</h3>
          <div className="mt-2">
            <div className="flex items-center mt-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Song 1"
                className="w-12 h-12 rounded mr-3"
              />
              <div>
                <p className="font-semibold">Kesariya</p>
                <p className="text-gray-500">
                  Pritam chakraborty-kasariya (from "brahmastra")
                </p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Song 2"
                className="w-12 h-12 rounded mr-3"
              />
              <div>
                <p className="font-semibold">Kesariya</p>
                <p className="text-gray-500">
                  Pritam chakraborty-kasariya (from "brahmastra")
                </p>
              </div>
            </div>
          </div>

          <button
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default Dialog;
