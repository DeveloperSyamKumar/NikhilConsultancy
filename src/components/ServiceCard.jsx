import React from "react"

function ServiceCard({ title, desc, icon: Icon }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <Icon className="w-10 h-10 text-indigo-600" />
      <h4 className="font-semibold mt-3">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  );x
}

export default ServiceCard