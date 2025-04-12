import { useEffect, useState } from "react";

const Screen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500); // splash stays for 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center animate-fadeOut">
      <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-bold text-center animate-slideDownThenUp">
        Welcome To Sofiyan Khan&apos;s Portfolio
      </h1>

      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

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

        @keyframes slideDownThenUp {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          50% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100px); /* Move down */
            opacity: 0;
          }
        }

        .animate-fadeOut {
          animation: fadeOut 2.5s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1s ease-out forwards;
        }

        .animate-slideDownThenUp {
          animation: slideDownThenUp 2.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Screen;
