import Lottie from 'lottie-react';
import { FaUser, FaEnvelope, FaComments, FaPaperPlane, FaTag } from 'react-icons/fa';
import React, { useRef, useState } from 'react';
import { lottie } from '../assets/lottie/lottie.js';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const form = useRef();
  const [isSend, setIsSend] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSend(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div name="Contact" className="w-full min-h-screen text-[#00040f] dark:text-[#e1e1e1] px-4 py-10">
      <ToastContainer />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
        <strong>Let's <span className="text-cyan-600">Connect!</span></strong>
      </h2>
      <div className="w-full max-w-6xl mx-auto bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#050710] dark:to-[#142a47] rounded-2xl shadow-md p-6 sm:p-8 md:p-10">

        <p className="text-sm sm:text-base md:text-lg text-center text-gray-800 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Fill out the form below or reach out directly—I'm always eager to hear new ideas, collaborate on exciting projects, or simply talk tech. 🚀 Let’s make something awesome together!
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Lottie
              animationData={lottie.contact}
              loop={true}
              className="max-w-[400px] w-full"
            />
          </div>

          <form ref={form} onSubmit={sendEmail} method="POST" className="w-full md:w-1/2 space-y-4 dark:text-[#00040f]">
            <div className="relative">
              <input type="text" name="name" placeholder="Name" required className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"/>
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>

            <div className="relative">
              <input type="email" name="email" placeholder="Email" required className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"/>
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>

            <div className="relative">
              <input type="text" name="subject" placeholder="Subject" required className="w-full h-12 pl-12 pr-4 border rounded-md border-gray-400 bg-blue-50"/>
              <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>

            <div className="relative">
              <textarea name="message" placeholder="Message For Ex: Hello, I'd like to talk about..." required className="w-full min-h-[130px] max-h-[230px] pl-12 pr-4 pt-3 border rounded-md border-gray-400 bg-blue-50"/>
              <FaComments className="absolute left-3 top-4 text-gray-600" />
            </div>

            <button type="submit" className="relative bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row gap-3 text-white text-lg py-2 pl-6 pr-10 rounded-md shadow-md hover:bg-green-600 transition">
              Submit <FaPaperPlane className="absolute top-3 right-3" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
