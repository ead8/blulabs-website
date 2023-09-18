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
    <section id="contact" className={`${styles.flexCenter} gap-10 mx-10 justify-between sm:flex-col`}>
      <div className="mb-3 ">
        <h1 className={styles.heading2}>Get <br /> in touch <span className="text-secondary ">.</span></h1>
        <div className=" flex mb-6 mt-5">
          <img src={phone} className=" object-contain" alt="phone" />
          <p className={"text-white leading-tight text-right"}>+251 908 55 56 57</p>
        </div>
        <div className="flex mb-6">
          <img src={mail} className=" object-contain" alt="phone" />
          <p className={"text-white leading-tight text-right"}>support@blulabs.net</p>
        </div>
        <div className="flex mb-6">
          <img src={place} className=" object-contain" alt="phone" />
          <a href="https://goo.gl/maps/B5Ge6LQLfu7RNoWM8" >
            Bole sub city, 22 Festival 22 Bldg, #401
          </a>
        </div>

      </div>
      <form
        className="bg-gradient-to-r max-w-xl from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg p-8 mb-8"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-lg font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full p-3 text-gray-800 bg-secondary border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full p-3 text-gray-800 bg-secondary border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white text-lg font-semibold mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            rows={3}
            className="w-full p-3 text-gray-800 bg-secondary border rounded-lg focus:outline-none focus:border-primary focus:ring focus:ring-primary resize-none"
            required
          />
        </div>
        <div className="mb-6 text-center">
          <button
            className="bg-blue-900 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-md transform hover:scale-105 transition-all duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>



    </section>
  );
};

export default Contact;
