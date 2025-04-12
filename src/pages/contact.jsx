import JsEmail from "../services/jsEmail";

const Contact = () => {
  return (
    <div className="relative flex flex-col-reverse md:block w-full px-4 py-5 m-auto">
      {/* Social Links - centered on mobile, right-fixed on desktop */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left pt-5 space-y-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2">
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
          GitHub
        </a>
        <a
          href="mailto:sofiyankhan7x@gmail.com"
          className="hover:text-purple-300 transition-colors"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/1Ga6GzJKEJo_tlFTTdfoOMk-8AG_PYo4T/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Form - always centered */}
      <div className="w-full flex justify-center mr-16 lg:pr-34">
        <JsEmail />
      </div>
    </div>
  );
};

export default Contact;
