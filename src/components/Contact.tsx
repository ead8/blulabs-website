import React, { useState } from "react";
import styles from "../style";
import { phone, mail, place } from "../assets";


const FORM_ENDPOINT = "https://formspree.io/support@blulabs.net";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon. </div>
      </>
    );
  }

  return (
    <section id="contact" className={`container flex flex-col mx-5 sm:flex-row justify-cener items-center px-4 `}>
    <div className="mb-6 px-8 ml-4 w-full md:w-2/3 lg:w-3/4">
      <h1 className={styles.heading2}>
        Get <br /> in touch <span className="text-primary ">.</span>
      </h1>
      <div className="flex flex-col mt-5">
        <div className="flex items-center mb-4">
          <img src={phone} className="object-contain" alt="phone" />
          <p className={"text-white leading-tight ml-4"}>+251 908 55 56 57</p>
        </div>
        <div className="flex items-center mb-4">
          <img src={mail} className="object-contain" alt="phone" />
          <p className={"text-white leading-tight ml-4"}>
            support@blulabs.net
          </p>
        </div>
        <div className="flex items-center">
          <img src={place} className="object-contain" alt="phone" />
          <a
            href="https://goo.gl/maps/B5Ge6LQLfu7RNoWM8"
            style={{ color: "#ffffff", textDecoration: "underline" }}
            className="ml-4"
          >
            Bole sub city, 22 Festival 22 Bldg, #401
          </a>
        </div>
      </div>
    </div>
    <div className="ml-4 p-4  gap-4 rounded-lg w-full md:w-1/2 lg:w-1/3">
      <form
        className={`shadow-2xl rounded-lg p-8 mb-8 w-[80%] `}
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
         <div className="mb-4 p-3">
            <label htmlFor="name" className="block text-white text-lg font-semibold ">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-4 text-gray-800 bg-gray-300 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-secondary"
              required
            />
          </div>
          <div className="mb-4 p-3">
            <label htmlFor="email" className="block text-white text-lg font-semibold ">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-4 text-gray-800 bg-gray-300 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-secondary"
              required
            />
          </div>
          <div className="mb-4 px-2">
            <label htmlFor="message" className="block ml-2 text-white text-lg font-semibold ">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={3}
              className="w-full p-4 text-gray-800 bg-gray-300 border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-secondary resize-none"
              required
            />
          </div>
          <div className="mb-6 text-center">
            <button
              className="bg-light-blue-900 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              type="submit"
            >
              Submit
            </button>
          </div>
      </form>
    </div>
  </section>
  )
}

export default Contact;
