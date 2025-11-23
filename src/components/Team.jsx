 import React from "react"
import TeamCard from "./TeamCard"
 function Team (){
    return(

      <section id="team" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-10">Our Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <TeamCard
              name="Anita Rao"
              title="Chief Analyst"
              img="https://randomuser.me/api/portraits/women/68.jpg"
            />
            <TeamCard
              name="Rohit Mehra"
              title="Head of Analytics"
              img="https://randomuser.me/api/portraits/men/12.jpg"
            />
            <TeamCard
              name="Sana Iqbal"
              title="Portfolio Manager"
              img="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TeamCard
              name="Vikram Singh"
              title="Data Engineer"
              img="https://randomuser.me/api/portraits/men/51.jpg"
            />
          </div>
        </div>
      </section>
    )
 }
 export default Team