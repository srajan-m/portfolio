import React from "react";

const projects = [
  {
    name: "Email Web Application",
    desc: "Send/receive emails with session-based login and clean UI. Built using ASP.NET (C#), SQL Server.",
    link: "http://smail.somee.com"
  },
  {
    name: "Dental Clinic System",
    desc: "Manage patient records, appointments, and treatment logs with secure role-based access. Tech stack: ASP.NET (C#), SQL Server.",
    link: "https://github.com/srajan-m/DentalApp.git"
  },
  {
    name: "Swiggy Clone",
    desc: "Full-stack food ordering with cart, menu listings, and order placement. Built using React, Node.js, MongoDB.",
    link: "https://github.com/srajan-m/swiggy-clone.git"
  },
  {
    name: "Property Web App",
    desc: "Dynamic property listings with user authentication, image uploads, and admin CRUD control. Tech stack: ASP.NET (C#), SQL Server.",

  },
  {
    name: "Insta Clone",
    desc: "Photo sharing app with user profiles, likes, comments, and Firebase backend. Tech stack: ASP.NET (C#), SQL Server.",
   
  },
  {
    name: "MyPay",
    desc: "Secure payment portal with transaction logs, user wallet, and audit-ready workflows. Tech stack: ASP.NET (C#), SQL Server.",

  }
];

const Projects = () => (
  <section id="projects" className="projects py-12 px-4 bg-white text-gray-800" data-aos="fade-up">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 hover-glow">Projects</h2>
    <div className="project-grid max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card p-4 bg-gray-100 rounded shadow hover:shadow-md transition"
          data-aos="zoom-in"
          data-aos-delay={index * 80}
        >
          <h3 className="font-semibold text-lg">{project.name}</h3>
          <p className="text-sm mb-1">{project.desc}</p>
          {project.link && (
            <a
              href={project.link}
              className="text-purple-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 Link
            </a>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Projects;