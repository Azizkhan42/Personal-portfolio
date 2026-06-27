import { useState } from "react";
import { useInView } from "../../hooks/useInView";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [ref, isInView] = useInView();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("sending");

    try {
      // Send email to you
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE,
        {
          title: "Portfolio Contact",
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // Auto reply to visitor
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const buttonText = () => {
    if (loading) return "Sending...";
    if (status === "sent") return "Message Sent ✓";
    return "Send Message";
  };

  return (
    <section id="contact-me" ref={ref} className="py-24 lg:py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}

          <div
            className={`transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="text-orange-500 font-medium">Contact Me</span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              Let's Work Together
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Have a project idea, freelance opportunity, or collaboration in
              mind? Feel free to reach out. I'm always interested in discussing
              new ideas and exciting projects.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-orange-500 font-medium">Email</p>

                <p className="text-gray-300">azizkhan43025@gmail.com</p>
              </div>

              <div>
                <p className="text-orange-500 font-medium">Phone</p>

                <p className="text-gray-300">+92 310 9967908</p>
              </div>

              <div>
                <p className="text-orange-500 font-medium">Location</p>

                <p className="text-gray-300">Peshawar, Pakistan</p>
              </div>

              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/Azizkhan42"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/aziz-ur-rehman-52500830a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div
            className={`transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5"
            >
              <div className="space-y-5">
                {" "}
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-orange-500"
                />
                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-orange-500"
                />
                {/* Message */}
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-orange-500 resize-none"
                />
                {/* Success Message */}
                {status === "sent" && (
                  <div className="bg-green-500/20 border border-green-500 text-green-400 rounded-lg p-3 text-sm">
                    ✅ Message sent successfully! Check your inbox for a
                    confirmation email.
                  </div>
                )}
                {/* Error Message */}
                {status === "error" && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 rounded-lg p-3 text-sm">
                    ❌ Something went wrong. Please try again later.
                  </div>
                )}
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold transition flex items-center justify-center gap-3 ${
                    loading
                      ? "bg-orange-400 cursor-not-allowed"
                      : "bg-orange-500 hover:bg-orange-600"
                  } text-white`}
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-20"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-100"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  )}

                  {buttonText()}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
