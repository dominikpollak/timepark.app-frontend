'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

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
      className="relative mb-24 w-[100%] text-center font-header text-[1.2em] text-white duration-200 md:text-[1.5em] xl:text-[1.9em]"
    >
      <form
        className="mx-auto mt-[6em] w-[85%] rounded-xl border-[6px] p-10 xl:w-[60%]"
        onSubmit={handleSignup}
      >
        <label>
          <div>Username: </div>
          <input
            ref={usernameRef}
            className="mb-6 mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="text"
          />
        </label>
        <label>
          <div>Email: </div>
          <input
            ref={emailRef}
            className="mb-6 mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="email"
          />
        </label>
        <label>
          <div>Password: </div>
          <input
            ref={pswdRef}
            className="mb-6 mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="password"
          />
        </label>
        <label>
          <div>Repeat password: </div>
          <input
            ref={pswd2Ref}
            className="mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="password"
          />
        </label>
        <div>
          <Link href="/timer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mt-16 rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 px-10 py-2 font-header text-[1.2em] text-black duration-100 hover:cursor-pointer hover:from-yellow-100 hover:to-orange-400"
            >
              Sign up
            </motion.button>
          </Link>
        </div>
      </form>
    </motion.div>
  );
}
