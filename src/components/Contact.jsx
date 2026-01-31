import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:arturowells@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };


  const buttonClassName = () => {
    let baseClass = 'py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300 ';
    if (loading) {
      return baseClass + 'bg-tertiary cursor-wait';
    } else if (submitted) {
      return baseClass + 'bg-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.3)]';
    }
    return baseClass + 'bg-tertiary hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:bg-[#f97316]';
  };

  const inputClassName = 'bg-tertiary py-4 px-6 placeholder:text-[#71717a] text-white rounded-lg outline-none border border-transparent font-medium transition-all duration-300 focus:border-[#f97316]/50 focus:shadow-[0_0_15px_rgba(249,115,22,0.15)] focus:bg-[#1e1e1e]';


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/5'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className='mt-4 flex items-center gap-3'>
          <span className='text-[#a1a1aa] text-[15px]'>arturowells@gmail.com</span>
          <button
            type='button'
            onClick={() => {
              navigator.clipboard.writeText('arturowells@gmail.com');
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className='text-[13px] px-3 py-1 rounded-lg border border-white/10 text-[#a1a1aa] hover:text-[#f97316] hover:border-[#f97316]/40 transition-all duration-300'
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name ?"
              className={inputClassName}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className={inputClassName}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={inputClassName}
            />
          </label>

          <button type='submit' className={buttonClassName()} onClick={()=> {setSubmitted(true)}} >
            {loading ? "Sending..." : submitted ? "Submitted" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
