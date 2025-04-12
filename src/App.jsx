// import { useState } from "react";
// import Home from "./pages/home";
// import Contact from "./pages/contact";
// import Projects from "./pages/projects";

// const App = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   const linkClass = (section) =>
//     `text-3xl font-semibold mb-4 transition-colors cursor-pointer ${
//       activeSection === section ? "text-purple-300" : ""
//     }`;

//   return (
//     <div
//       className="flex h-screen text-white bg-cover bg-center"
//       style={{ backgroundImage: `url("/src/assets/portfoliobg.gif")` }}
//     >
//       <aside className="w-60 p-2">
//         <h1 className="text-2xl font-bold leading-tight mb-2">
//           Momin Sofiyan Khan
         
//         </h1>
//         <p className="mb-12 text-xl font-semibold">
//           Angular/ReactJs
//           <br />
//           Spring Boot
//         </p>

//         <nav className="flex flex-col space-y-4">
//           <span
//             onClick={() => setActiveSection("home")}
//             className={linkClass("home")}
//           >
//             Home
//           </span>
//           <span
//             onClick={() => setActiveSection("projects")}
//             className={linkClass("projects")}
//           >
//             Projects
//           </span>
//           <span
//             onClick={() => setActiveSection("contact")}
//             className={linkClass("contact")}
//           >
//             Contact
//           </span>
//         </nav>
//       </aside>

//       <main className="flex-1 p-6 overflow-y-auto">
//         {activeSection === "home" && <Home />}
//         {activeSection === "projects" && <Projects />}
//         {activeSection === "contact" && <Contact />}
//       </main>
//     </div>
//   );
// };

// export default App;


import { useState } from "react";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const linkClass = (section) =>
    `text-xl sm:text-2xl md:text-3xl font-semibold transition-colors cursor-pointer ${
      activeSection === section ? "text-purple-300" : ""
    }`;

  return (
    <div
      className="flex flex-col md:flex-row h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url("/src/assets/portfoliobg.gif")` }}
    >
      <aside className="w-full md:w-60 p-4 flex-shrink-0 bg-black/50 md:bg-transparent">
        <h1 className="text-xl sm:text-2xl font-bold leading-tight mb-2">
          Momin Sofiyan Khan
        </h1>
        <p className="mb-8 text-lg sm:text-xl font-semibold">
          Angular/ReactJs
          <br />
          Spring Boot
        </p>

        <nav className="flex md:flex-col gap-4 justify-center md:justify-start">
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

      <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-black/30 md:bg-transparent">
        {activeSection === "home" && <Home />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
