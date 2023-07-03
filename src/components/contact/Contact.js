import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_iep23qb",
        "template_6j5cvwp",
        {
          from_name: form.name,
          to_name: "Luat Su Bach Lan",
          from_email: form.email,
          message: form.message,
        },
        "evKuoxCGl6uq2ldh3"
      )
      .then(
        () => {
          setLoading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 3000);
        },
        () => {
          setLoading(false);
          console.error("Failed to send email.");
        }
      );
  };

  return (
    <div className="isolate px-6 py-10 text-black mb-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Me
        </h2>
      </div>
      <div>
        {showSuccess && (
          <div className="m-auto text-center text-bold text-lg">
            Message sent successfully!
          </div>
        )}
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mx-auto max-w-xl sm:mt-20"
      >
        <div className="sm:col-span-2">
          <div className="mt-[-5%]">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6"
            >
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                type={`text`}
                label="name"
                name="name"
                id="name"
                placeholder="Bạn tên gì?"
                value={form.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 text-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type={`email`}
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email của bạn là gì?"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                rows={7}
                value={form.message}
                onChange={handleChange}
                placeholder="Bạn có câu hỏi gì?"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset text-black ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center">
          <button
            type="submit"
            className="contact-button block rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
