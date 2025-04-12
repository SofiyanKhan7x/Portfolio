const Projects = ({ projectList, selectedProject, setSelectedProject }) => {
  return (
    <div className="flex items-center flex-col md:flex-row w-full h-full p-4 sm:p-6 gap-6">
      {/* Left: Project details */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-red-300">
          {selectedProject.title}
        </h2>
        <p className="mb-4 text-base sm:text-lg leading-relaxed">
          {selectedProject.description}
        </p>
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
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

      {/* Right: Project list */}
      <div className="w-full md:w-64 space-y-2">
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
    </div>
  );
};

export default Projects;
