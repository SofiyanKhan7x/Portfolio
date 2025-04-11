// import { useState } from "react";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   const linkClass = (section) =>
//     `text-2xl font-semibold mb-4 transition-colors cursor-pointer ${
//       activeSection === section ? "text-purple-300" : ""
//     }`;

//   return (
//     <div
//       className="flex h-screen text-white bg-cover bg-center "
//       style={{ backgroundImage: `url("/src/assets/portfoliobg.gif")` }}
//     >
//       <aside className="w-60 p-2">
//         <h1 className="text-2xl font-bold leading-tight mb-1">
//           Momin Sofiyan Khan
//         </h1>
//         <p className="mb-12 text-lg text-2xl font-semibold ">
//           Angular
//           <br />
//           Spring Boot
//         </p>

       
//         <nav className="flex flex-col space-y-4">
         
//           <span
//             onClick={() => setActiveSection("home")}
//             className="cursor-pointer font-semibold text-3xl mb-2 hover:text-emerald-300 w-2 transition-colors"
//             style={
//               activeSection === "home"
//                 ? { textShadow: "0px 1px 3px #3b82f6a0" }
//                 : {}
//             }
//           >
//             Home
//           </span>

//           <span
//             onClick={() => setActiveSection("projects")}
//             className="cursor-pointer font-semibold text-3xl mb-2 hover:text-emerald-300 w-2 transition-colors"
//             style={
//               activeSection === "projects"
//                 ? { textShadow: "0px 1px 3px #3b82f6a0" }
//                 : {}
//             }
//           >
//             Projects
//           </span>

//           <span
//             onClick={() => setActiveSection("contact")}
//             className="cursor-pointer font-semibold text-3xl mb-2 hover:text-emerald-300 w-2 transition-colors"
//             style={
//               activeSection === "contact"
//                 ? { textShadow: "0px 1px 3px #3b82f6a0" }
//                 : {}
//             }
//           >
//             Contact
//           </span>
//         </nav>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1  p-8 overflow-y-auto">
//         {activeSection === "home" && (
          // <div className=" flex items-center h-full justify-end max-600:justify-center max-600:gap-6 max-600:w-screen ">
          //   <p className="text-lg leading-relaxed  flex justify-center max-600:p-3 items-center w-1/2 max-600:w-full max-600:text-center max-600:items-center ">
          //     I am an MCA student at MIT Aurangabad, specializing in backend
          //     development. With a strong foundation in programming languages
          //     such as Java, and Python, as well as web development skills in
          //     HTML and CSS, I am passionate about building efficient and
          //     scalable backend systems. My expertise also includes working with
          //     RDBMS for effective database management. I am eager to apply my
          //     knowledge and skills to real-world projects and am continuously
          //     learning to stay updated with the latest technological
          //     advancements. My goal is to contribute to meaningful projects and
          //     grow as a backend developer. Outside of tech, I am a NCC Senior
          //     Under Officer Cadet
          //   </p>
          // </div>
//         )}

//         {activeSection === "projects" && (
//           <div className="max-w-4xl">
//             <h2 className="text-3xl font-bold mb-4">Projects</h2>
//             <ul className="list-disc list-inside space-y-2">
//               <li>GroLens - Cannabis cultivation software</li>
//               <li>Rare Collectibles TV - E-commerce & live bidding</li>
//               <li>Freelance dashboards & client CRMs</li>
//             </ul>
//           </div>
//         )}

//         {activeSection === "contact" && (
//           // <div className="max-w-4xl">
//           //   <h2 className="text-3xl font-bold mb-4">Contact</h2>
//           //   <p>Email: sofiyankhan7x@example.com</p>
//           //   <p>LinkedIn: www.linkedin.com/in/momin-sofiyan-khan-6bab05313</p>

//           // <div
//           //   class="flex items-center h-full justify-end max-600:justify-center max-600:gap-6 max-600:w-screen"
//           //   style="opacity: 1; transform: none;"
//           // >
//           <section class="flex  float-end justify-center items-center">
//             <ul class="text-4xl mt-70 font-semibold">
//               <li class="mb-2 cursor-pointer max-600:mb-6 ">
//                 <a
//                   target="_blank"
//                   href="https://www.linkedin.com/in/momin-sofiyan-khan-6bab05313/"
//                 >
//                   LinkedIn
//                 </a>
//               </li>
//               <li class="mb-2 cursor-pointer max-600:mb-6">
//                 <a target="_blank" href="https://github.com/SofiyanKhan7x">
//                   Github
//                 </a>
//               </li>
//               <li class="mb-2 cursor-pointer max-600:mb-6">
//                 <a href="mailto:sofiyankhan7x@gmail.com">Email</a>
//               </li>
//               <li class="mb-2 cursor-pointer max-600:mb-6">
//                 <a
//                   target="_blank"
//                   href="https://drive.google.com/file/d/1Ga6GzJKEJo_tlFTTdfoOMk-8AG_PYo4T/view?usp=drive_link"
//                   rel="noopener noreferrer"
//                 >
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </section>
//         )}
//       </main>
//     </div>
//   );
// };

// export default App;



import { useState } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      tech: ["HTML", "CSS/Bootstrap", "JAVA ","JavaScript", "JSP"],
    },
    // {
    //   title: "Goodr",
    //   description:
    //     "Goodr is a smart food delivery & inventory system designed to reduce waste and enhance logistics. I was involved in frontend dashboards and backend inventory APIs.",
    //   tech: ["Next.js", "PostgreSQL", "TailwindCSS", "Docker"],
    // },
  ];

  const [selectedProject, setSelectedProject] = useState(projectList[0]);

  const linkClass = (section) =>
    `text-3xl font-semibold mb-4 transition-colors cursor-pointer ${
      activeSection === section ? "text-purple-300" : ""
    }`;

  return (
    <div
      className="flex h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url("/src/assets/portfoliobg.gif")` }}
    >
      <aside className="w-60 p-2">
        <h1 className="text-2xl font-bold leading-tight mb-2">
          Momin Sofiyan Khan
        </h1>
        <p className="mb-12 text-xl font-semibold">
          Angular/ReactJs
          <br />
          Spring Boot
        </p>

        <nav className="flex flex-col space-y-4">
          <span
            onClick={() => setActiveSection("home")}
            className={linkClass("home")}
          >
            Home
          </span>
          <span
            onClick={() => setActiveSection("projects")}
            className={linkClass("projects")}
          >
            Projects
          </span>
          <span
            onClick={() => setActiveSection("contact")}
            className={linkClass("contact")}
          >
            Contact
          </span>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        {activeSection === "home" && (
          <div className=" flex items-center h-full justify-end max-600:justify-center max-600:gap-6 max-600:w-screen ">
            <p className="text-lg leading-relaxed  flex justify-center max-600:p-3 items-center w-1/2 max-600:w-full max-600:text-center max-600:items-center ">
              I am an MCA student at MIT Aurangabad, specializing in backend
              development. With a strong foundation in programming languages
              such as Java, and Python, as well as web development skills in
              HTML and CSS, I am passionate about building efficient and
              scalable backend systems. My expertise also includes working with
              RDBMS for effective database management. I am eager to apply my
              knowledge and skills to real-world projects and am continuously
              learning to stay updated with the latest technological
              advancements. My goal is to contribute to meaningful projects and
              grow as a backend developer. Outside of tech, I am a NCC Senior
              Under Officer Cadet
            </p>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="flex justify-end items-center h-full w-full pr-4">
            <div className="flex flex-col space-y-2 text-4xl font-semibold">
              <a
                href="https://www.linkedin.com/in/momin-sofiyan-khan-6bab05313/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/SofiyanKhan7x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Github
              </a>
              <a href="mailto:sofiyankhan7x@gmail.com">Email</a>
              <a
                href="https://drive.google.com/file/d/1Ga6GzJKEJo_tlFTTdfoOMk-8AG_PYo4T/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="flex flex-col md:flex-row w-full h-full p-6 space-y-6 md:space-y-0 md:space-x-6">
            {/* Left: Project details */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4 text-purple-300">
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
                    className="bg-purple-800 px-2 py-1 rounded-full text-sm"
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
        )}
      </main>
    </div>
  );
};

export default App;