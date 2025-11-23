import React from "react";

function TeamCard({ name, title, img }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-center">
      <img src={img} className="w-20 h-20 mx-auto rounded-full object-cover" />
      <div className="mt-3 font-semibold">{name}</div>
      <div className="text-sm text-gray-500">{title}</div>
    </div>
  );
}

export default TeamCard