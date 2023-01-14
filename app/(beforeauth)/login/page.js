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
      className="w-[100%] text-center relative text-white text-[1.2em] md:text-[1.5em] xl:text-[1.9em] mb-24 font-header duration-200"
    >
      <form
        className="mx-auto w-[85%] xl:w-[60%] border-[6px] p-10 rounded-xl mt-[6em]"
        onSubmit={handleLogin}
      >
        <label>
          <div>Username/Email: </div>
          <input
            ref={userRef}
            className="w-[100%] md:w-[75%] mb-12 rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="text"
          />
        </label>
        <label>
          <div>Password: </div>
          <input
            ref={pswdRef}
            className="w-[100%] md:w-[75%] rounded-3xl py-2 px-4 mt-2 text-black font-paragraph text-center"
            type="password"
          />
        </label>
        <div>
          <Link href="/timer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="duration mt-16 text-[1.2em] border-[5px] px-10 py-2 bg-gradient-to-b from-cyan-600 to-violet-800 rounded-xl font-header text-white hover:from-cyan-500 hover:to-violet-700 hover:cursor-pointer"
            >
              Login
            </motion.button>
          </Link>
        </div>
      </form>
    </motion.div>
  );
}
