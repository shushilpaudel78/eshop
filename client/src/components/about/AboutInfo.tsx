// components/About.tsx
import React from "react";
import Image from "next/image";

export const AboutInfo: React.FC = () => {
    return (
        <section className="bg-white py-16 px-6 pt-30">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Me</h2>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                        src="/images/waterfall.jpg" // Replace with your image path
                        alt="About me"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I am a passionate software developer with expertise in modern web
                        technologies, including Next.js, React, Node.js, and Tailwind CSS.
                        My focus is on building efficient, scalable, and user-friendly
                        applications that bring real value to users. I believe in writing
                        clean, maintainable code and constantly learning to improve my
                        craft.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        My mission is to create digital solutions that combine performance,
                        usability, and beautiful design. I value collaboration,
                        problem-solving, and continuous improvement. Every project I take
                        on is an opportunity to innovate and deliver high-quality results.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Over the years, I have worked with multiple companies, including
                        Margin Top Solutions and Bihani Tech, where I contributed to various
                        projects ranging from eCommerce platforms to business automation
                        tools. This journey has helped me develop strong technical skills
                        and a deep understanding of the software development lifecycle, from
                        planning to deployment.
                    </p>
                </div>
            </div>
        </section>
    );
};

