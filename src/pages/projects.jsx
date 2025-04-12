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
    <div className="flex flex-col md:flex-row w-full h-full p-6 space-y-6 md:space-y-0 md:space-x-6">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4 text-red-300">
          {selectedProject.title}
        </h2>
        <p className="mb-4 text-lg leading-relaxed">
          {selectedProject.description}
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white">
          Technologies Used:
        </h3>
        <div className="flex flex-wrap gap-2 text-sm text-gray-200 font-semibold">
          {selectedProject.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-cyan-400 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full md:w-64 space-y-2">
        {projectList.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`cursor-pointer text-lg font-semibold hover:text-purple-300 transition-colors ${
              selectedProject.title === project.title
                ? "text-green-400"
                : "text-gray-300"
            }`}
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
