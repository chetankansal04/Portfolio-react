import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zwee2ho", "template_7cztisn", form.current, {
        publicKey: "flRPswRXMb2qrK2Hk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="flex flex-col space-y-5 place-self-center max-h-screen"
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col transition-transform duration-300 hover:scale-110">
        <label
          for="name"
          class="block text-sm font-semibold leading-6 text-gray-900"
        >
          Name
        </label>
        <div class="mt-2.5">
          <input
            type="text"
            name="from_name"
            id="name"
            autocomplete="name"
            class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="flex flex-col transition-transform duration-300 hover:scale-110">
        <div class="sm:col-span-2">
          <label
            for="email"
            class="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div class="mt-2.5">
            <input
              type="email"
              name="from_email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col transition-transform duration-300 hover:scale-110">
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-sm font-semibold leading-6 text-gray-900"
          >
            Message
          </label>
          <div class="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex flex-col transition-transform duration-300 hover:scale-110">
        <label></label>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Contact;
