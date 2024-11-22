// components/Teams.js
import React from "react";



const Teams = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center">OUR TECHNICAL TEAMS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 text-center">
            <img
              src={team.img}
              alt={team.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="font-bold mt-4">{team.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
