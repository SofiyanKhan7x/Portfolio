const Contact = () => {
  return (
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
  );
};

export default Contact;
