

const Home = () => {
  return (
    <div className="flex items-center justify-end h-full w-full px-4 sm:px-8 md:px-16 py-10 mt-5 sm:mt-2 lg:mt-0">
      <div className="max-w-3xl">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify animate-slideDown">
          I’m currently pursuing my post-graduation and working as a Full Stack
          Developer. I build complete web applications—from designing responsive
          frontends using ReactJS and Angular, to developing robust backends
          with Spring Boot. I love writing clean, efficient code in Java and
          continuously explore new technologies to grow my skillset. Right now,
          I’m gaining real-world experience through an internship at K7 Codelabs
          as a Full Stack Developer, where I work on both frontend and backend
          development. Besides my studies and internship, I take up freelance
          projects and enjoy turning ideas into fully functional applications.
          With strong communication skills and a passion for problem-solving,
          I’m confident in building projects across any tech stack.
        </p>
      </div>

      {/* Inline CSS for animation */}
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

export default Home;
