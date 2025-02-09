import React, { BaseSyntheticEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
const SERVICE_ID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
const SENDER = import.meta.env.VITE_APP_EMAILJS_SEND_MAIL_TO_NAME;
const RECEIVER = import.meta.env.VITE_APP_EMAILJS_SEND_MAIL_TO;

const ContactUs = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState<{ type?: string; message?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    setAlert({});
  };
  console.log({ SENDER, RECEIVER, TEMPLATE_ID, SERVICE_ID, PUBLIC_KEY });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;
    let alertMessage;
    if (!message) alertMessage = "message";
    if (!email) alertMessage = "email";
    if (!name) alertMessage = "name";

    if (alertMessage)
      return setAlert({
        type: "error",
        message: `Please enter your ${alertMessage}!`,
      });
    setLoading(true);
    console.log(name, email, message);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          to_name: SENDER,
          from_email: email,
          to_email: RECEIVER,
          message: message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          setAlert({
            type: "success",
            message: "Thank you. I will get back to you as soon as possible.",
          });
          dismissAlert();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setAlert({
            type: "error",
            message: "Ahh, something went wrong. Please try again.",
          });
          dismissAlert();
        }
      );
  };

  const dismissAlert = () => {
    const alertTimeout = setTimeout(() => {
      setAlert({});
      clearTimeout(alertTimeout);
    }, 3000);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {alert.message && (
          <div
            className={
              styles.alertContainer +
              ` ${alert.type === "success" ? "bg-green-400" : "bg-red-400"}`
            }>
            {alert.message}
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Please provide your full name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Please provide a valid email address'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Tell us more about your request'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
const Contact = SectionWrapper(ContactUs, "contact");
export default Contact;
