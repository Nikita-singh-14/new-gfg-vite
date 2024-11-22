import React from "react";
import { TeamCard } from "../components/TeamCard";

export default function TechnicalTeams(){
  const teams = [
    { name: "Web Dev", img: "/assets/webdev.jpg" },
    { name: "AI/ML", img: "/assets/ai_ml.jpg" },
    { name: "App Dev", img: "/assets/appdev.jpg" },
    { name: "CP DSA", img: "/assets/cp_dsa.jpg" },
    { name: "Game Dev", img: "/assets/gamedev.jpg" },
    { name: "Internet of Things", img: "/assets/iot.jpg" },
    { name: "Cyber Security", img: "/assets/cyber.jpg" },
  ];
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
          <h2 className="text-xl font-bold text-center">Our Technical Teams</h2>
         <div className="flex flex-wrap justify-center gap-8 p-8">

          {teams.map((profile, index) => (
            <TeamCard
              key={index}
              name={profile.name}
              img={profile.img}
            />
          ))}
          </div>
    </div>
   
  )
}