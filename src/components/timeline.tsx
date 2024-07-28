"use client";

import * as React from "react";

const timelineData = [
  {
    title: "Bachelor's Degree in Computer Science",
    date: "2018 - 2022",
    description:
      "University of XYZ. Specialized in software engineering and DevOps.",
  },
  {
    title: "Full Stack Developer Intern",
    date: "Summer 2021",
    description:
      "Developed web applications and gained experience in front-end and back-end technologies.",
  },
  {
    title: "DevOps and Cloud Engineer Intern",
    date: "Jan 2022 - Jun 2022",
    description:
      "Worked on cloud infrastructure, CI/CD pipelines, and automation tools.",
  },
];

export function Timeline() {
  return (
    <section className="py-8" id="timeline">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item mb-8 ml-4">
            <div className="timeline-date text-gray-600 dark:text-gray-400">
              {item.date}
            </div>
            <div className="timeline-content bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="timeline-title text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
