'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function SignupPage() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const pswdRef = useRef();
  const pswd2Ref = useRef();

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150 }}
      exit={{ scale: 0, opacity: 0 }}
      className="w-[100%] text-center relative text-white text-[1.2em] md:text-[1.5em] xl:text-[1.9em] mb-24 font-header duration-200"
    >
      <form
        className="mx-auto w-[85%] xl:w-[60%] border-[6px] p-10 rounded-xl mt-[6em]"
        onSubmit={handleSignup}
      >
        <label>
          <div>Username: </div>
          <input
            ref={usernameRef}
            className="w-[100%] md:w-[75%] mb-6 rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="text"
          />
        </label>
        <label>
          <div>Email: </div>
          <input
            ref={emailRef}
            className="w-[100%] md:w-[75%] mb-6 rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="email"
          />
        </label>
        <label>
          <div>Password: </div>
          <input
            ref={pswdRef}
            className="w-[100%] md:w-[75%] mb-6 rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="password"
          />
        </label>
        <label>
          <div>Repeat password: </div>
          <input
            ref={pswd2Ref}
            className="w-[100%] md:w-[75%] rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="password"
          />
        </label>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="duration-100 mt-16 text-[1.2em] border-[5px] border-black px-10 py-2 rounded-xl font-header text-black bg-gradient-to-b from-yellow-200 to-orange-500 hover:from-yellow-100 hover:to-orange-400 hover:cursor-pointer"
          >
            Sign up
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
