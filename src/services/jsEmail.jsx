
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const JsEmail = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uj0lhbl",
        "template_lvba3rq",
        form.current,
        "_E0KHJSe16GzOZQW9"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 3000); // hide after 3s
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="relative w-full max-w-md">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 w-full shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Send Message
        </h2>

        {/* Success message */}
        {success && (
          <div className="flex flex-col items-center opacity-0 animate-fadeIn">
            <div className="text-5xl text-green-400 mb-1 flex flex-row">
              ✅ 
              {/* <p className="text-green-300 text-lg font-semibold">
                Message sent successfully!
              </p> */}
            </div>
          </div>
        )}

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

      {/* Custom fadeIn animation using Tailwind */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default JsEmail;
