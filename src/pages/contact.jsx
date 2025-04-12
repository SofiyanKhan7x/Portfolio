
// const Contact = () => {
//   return (
//     <div className="flex justify-center lg:justify-end items-center h-full w-full px-4 py-10">
//       <div className="flex flex-col space-y-4 text-xl sm:text-2xl md:text-3xl font-semibold text-center">
//         <a
//           href="https://www.linkedin.com/in/momin-sofiyan-khan-6bab05313/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-300 transition-colors"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="https://github.com/SofiyanKhan7x"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-300 transition-colors"
//         >
//           Github
//         </a>
//         <a
//           href="mailto:sofiyankhan7x@gmail.com"
//           className="hover:text-purple-300 transition-colors"
//         >
//           Email
//         </a>
//         <a
//           href="https://drive.google.com/file/d/1Ga6GzJKEJo_tlFTTdfoOMk-8AG_PYo4T/view?usp=drive_link"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-purple-300 transition-colors"
//         >
//           Resume
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uj0lhbl", // My  EmailJS service ID
        "template_lvba3rq", // My  EmailJS template ID
        form.current,
        "_E0KHJSe16GzOZQW9" // My EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full px-4 py-10 gap-10">
      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 w-full max-w-md shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Send Message
        </h2>

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-lg outline-none focus:ring-2 focus:ring-purple-300"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-lg outline-none focus:ring-2 focus:ring-purple-300"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 bg-white/20 text-white placeholder-white rounded-lg outline-none focus:ring-2 focus:ring-purple-300"
        />

        <button
          type="submit"
          className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition duration-300 font-semibold"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex flex-col space-y-4 text-xl sm:text-2xl md:text-3xl font-semibold text-center md:text-left text-white">
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
    </div>
  );
};

export default Contact;
