import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?w=200"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="font-semibold text-lg">Nikhil Consultancy</h1>
              <p className="text-xs text-gray-500">Financial & Data Insights</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#industries" className="hover:underline">
              Industries
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#team" className="hover:underline">
              Team
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden p-2 bg-gray-100 rounded">☰</button>
        </div>
      </header>
  )}
export default Navbar;
