

const Home = () => {
  return (
    <div className="flex items-center justify-end h-full w-full px-4 sm:px-8 md:px-16 py-10 mt-5 sm:mt-2 lg:mt-0">
      <div className="max-w-3xl">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify animate-slideDown">
          I am an MCA student at MIT Aurangabad, specializing in backend
          development. With a strong foundation in programming languages such as
          Java and Python, as well as web development skills in HTML and CSS, I
          am passionate about building efficient and scalable backend systems.
          My expertise also includes working with RDBMS for effective database
          management. I am eager to apply my knowledge and skills to real-world
          projects and am continuously learning to stay updated with the latest
          technological advancements. My goal is to contribute to meaningful
          projects and grow as a backend developer. Outside of tech, I am a NCC
          Senior Under Officer.
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
