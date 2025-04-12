
// export default Projects;
import { useState } from "react";

const Projects = () => {
  const projectList = [
    {
      title: "CRUD-Application-JSP",
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
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  return (
    <div className="flex flex-col lg:flex-row-reverse  w-full h-full p-4 sm:p-6">
      {/* Project List */}
      <div className="w-full lg:w-64 flex flex-col items-center text-center lg:items-start lg:text-left space-y-0 mb-6 lg:mb-0  lg:float-end lg:pl-20">
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
        <div className="flex flex-wrap gap-2 text-sm text-gray-200 font-semibold">
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
  );
};

export default Projects;
