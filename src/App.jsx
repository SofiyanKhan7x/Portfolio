<aside className="w-full md:w-60 p-4 md:p-6 flex md:flex-col items-center md:items-start justify-between md:justify-start bg-black bg-opacity-50 md:bg-transparent">
  <div>
    <h1 className="text-xl sm:text-2xl font-bold mb-1 md:mb-2">
      Momin Sofiyan Khan
    </h1>
    <p className="text-sm sm:text-base font-semibold md:mb-8 text-center md:text-left">
      Angular/ReactJs <br /> Spring Boot
    </p>
  </div>

  <nav className="flex space-x-4 md:space-x-0 md:space-y-4 md:flex-col text-center mt-2 md:mt-0">
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
</aside>;
