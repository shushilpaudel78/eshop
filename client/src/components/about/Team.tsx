// components/about/TeamSection.tsx
import React from "react";
import Image from "next/image";

const team = [
  { name: "John Doe", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jane Smith", role: "Lead Developer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Michael Brown", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/men/65.jpg" },
];

export default function Team() {
  return (
    <section className="py-16 pt-30 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
              <Image
                width={128}
                height={128}
                src={member.img}
                alt={member.name}
                className=" rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
