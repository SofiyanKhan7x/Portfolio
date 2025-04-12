import { useRef } from "react";
import emailjs from "@emailjs/browser";

const JsEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uj0lhbl", // your EmailJS service ID
        "template_lvba3rq", // your EmailJS template ID
        form.current,
        "_E0KHJSe16GzOZQW9" // your EmailJS public key
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
  );
};

export default JsEmail;
