import React from "react";
import { CardDemo } from "../components/CardDemo";

export default function Core(){
  const teamMembers = [
    { name: "Anshuman Mishra", role: "Chairperson", img: "/assets/avatar.jpeg" },
    { name: "Aditya Raj", role: "Vice Chairperson", img: "/assets/aditya.jpg" },
    { name: "Piyush Keshari", role: "Event Head", img: "/assets/piyush.png" },
    { name: "Anuj Vishwakarma", role: "Technical Head", img: "/assets/anuj.jpg" },
    { name: "Sakshi Aggrawal", role: "Content Head", img: "/assets/sakshi.png" },
    { name: "Sameer", role: "GD/Branding Head", img: "/assets/avatar.jpeg" },
  ];
  return (
    <div style={{backgroundColor: "#f5f5f5"}}>
          <h2 className="text-xl font-bold text-center">Our Core Team</h2>
         <div className="flex flex-wrap justify-center gap-8 p-8">

          {teamMembers.map((profile, index) => (
            <CardDemo
              key={index}
              name={profile.name}
              role={profile.role}
              img={profile.img}
            />
          ))}
          </div>
    </div>
   
  )
}