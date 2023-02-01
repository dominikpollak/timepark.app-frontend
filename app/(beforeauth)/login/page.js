'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export default function LoginPage() {
  const userRef = useRef();
  const pswdRef = useRef();

  const handleLogin = (e) => {
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
        onSubmit={handleLogin}
      >
        <label>
          <div>Username/Email: </div>
          <input
            ref={userRef}
            className="mb-12 mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="text"
          />
        </label>
        <label>
          <div>Password: </div>
          <input
            ref={pswdRef}
            className="mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="password"
          />
        </label>
        <div>
          <Link href="/timer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="duration mt-16 rounded-xl border-[5px] bg-gradient-to-b from-cyan-600 to-violet-800 px-10 py-2 font-header text-[1.2em] text-white hover:cursor-pointer hover:from-cyan-500 hover:to-violet-700"
            >
              Login
            </motion.button>
          </Link>
        </div>
      </form>
    </motion.div>
  );
}
