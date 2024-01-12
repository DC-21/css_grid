import React from "react";

const card = () => {
  return (
    <div className="w-full bg-slate-900 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-2 w-[400px] rounded text-gray-200 shadow shadow-slate-400">
        <div className="grid grid-rows-6 gap-4 p-3">
          <div className="bg-green-500 rounded p-3">Facebook</div>
          <div className="bg-red-500 rounded p-3">Alphabet</div>
          <div className="bg-pink-500 rounded p-3">Alibaba</div>
          <div className="bg-yellow-500 rounded p-3">Aramco</div>
          <div className="bg-orange-500 rounded p-3">Bluecode</div>
          <div className="bg-blue-500 rounded p-3">SaCip</div>
        </div>
        <div className="h-full rounded p-3">
          <div className=" bg-purple-500 rounded h-full items-center flex justify-center">
            Chola
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
