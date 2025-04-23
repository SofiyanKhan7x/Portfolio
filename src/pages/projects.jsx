
import { useState } from "react";

const Projects = () => {
  const projectList = [
    {
      title: "CRUD-Application",
      description:
        "A simple CRUD application to manage user data with features like Add, Update, View, and Delete. Deleted records move to a Recycle Bin, where you can either restore or permanently delete them. Built with JSP, PostgreSQL, and Bootstrap for a responsive and user-friendly interface.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "JAVA", "JSP"],
    },
    {
      title: "managmentSystem",
      description:
        "This User Management System is a web-based application that allows users to register and log in securely. Once registered, users can access the system, but their access depends on their account status. If the admin deactivates a user, that user will not be able to log in until the admin reactivates the account. The admin has access to a dedicated dashboard where they can view the entire user list. From this dashboard, the admin can activate or deactivate users as needed and also has the ability to permanently delete any user from the system. This setup provides a simple and effective way to manage user access and maintain control over who can use the platform.",
      tech: ["HTML", "CSS/Bootstrap", "JAVA ", "JavaScript", "JSP"],
    },
    {
      title: "ProductNest",
      description:
        "ProductNest API is a Spring Boot RESTful service that allows users to add, update, delete, and view products. Designed for simplicity and scalability, it supports full CRUD operations using a clean architecture and follows best REST API practices. Powered by an H2 in-memory database for rapid development and testing.",
      tech: ["JAVA ", "Spring Boot RESTful"],
    },
    {
      title: "Flour Mill ",
      description:
        "This is a full-stack application for managing customers and their transactions for a flour mill. It features a secure admin login and offers a clean, modern, and responsive dashboard where the admin can add new customers, update customer details, and delete customers. Each customer can have multiple transactions, and the admin can efficiently manage these by adding, updating, or deleting them. Transactions include flour type, in-time, out-time, quantity, unit price, and total amount. The frontend is built using ReactJS and TailwindCSS for a fast and sleek user experience, while the backend is powered by Spring Boot, providing robust RESTful APIs. All data is stored securely in a PostgreSQL database, ensuring reliability and scalability. The entire system is designed for simplicity, ease of use, and seamless management of customers and their transaction histories.",
      tech: ["ReactJs","JAVA", "Spring Boot RESTful"," PostgreSQL", "TailwindCSS"],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  return (
    <div className="flex flex-col lg:flex-row-reverse w-full h-full p-4 sm:p-6">
      {/* Main Wrapper with Animation */}
      <div className="animate-slideDown w-full">
        {/* Project List */}
        <div className="w-full lg:w-64 flex flex-col items-left text-left lg:items-start lg:text-left space-y-0 mb-6 lg:mb-0 lg:float-end lg:pl-20">
          {projectList.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className={`cursor-pointer text-base sm:text-lg font-semibold hover:text-purple-300 transition-colors ${
                selectedProject.title === project.title
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              {project.title}
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="flex-1 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-red-300 text-center lg:text-left">
            {selectedProject.title}
          </h2>
          <p className="mb-6 text-base sm:text-lg leading-relaxed text-justify text-white">
            {selectedProject.description}
          </p>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
            Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-2 text-sm text-gray-200 font-semibold mb-8">
            {selectedProject.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-purple-400 px-2 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS for Animation */}
      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Projects;
