 import React from "react"

 function Hero (){
    return(
 <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Grow wealth. Reduce risk. Make data-driven decisions.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            We provide consultancy for financial planning, mutual funds, CRM,
            stock insurance, SQL analytics & Power BI dashboards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow"
            >
              Get Consultation
            </a>
            <a
              href="#services"
              className="px-5 py-3 border border-gray-200 rounded-md text-sm"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=900"
            alt="Analytics Dashboard"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    )
 }

export default Hero
