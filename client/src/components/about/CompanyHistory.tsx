import React from "react";

interface TimelineItem {
  year: string;
  text: string;
}

const CompanyHistory: React.FC = () => {
  const timeline: TimelineItem[] = [
    { year: "2015", text: "Company founded with a focus on web development." },
    { year: "2017", text: "Expanded into mobile app development and UI/UX design." },
    { year: "2019", text: "Partnered with international clients and opened our second office." },
    { year: "2022", text: "Launched our flagship SaaS product, reaching over 10,000 users." },
    { year: "2024", text: "Recognized as one of the top software solution providers in the region." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Journey Through Time
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Founded in <span className="font-semibold">2015</span>, our company
          started with a small but passionate team. Today, we’ve grown into a
          trusted partner for clients worldwide.
        </p>

        <div className="relative border-l-4 border-blue-500">
          {timeline.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
              <time className="mb-1 text-lg font-semibold text-gray-900">
                {item.year}
              </time>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
