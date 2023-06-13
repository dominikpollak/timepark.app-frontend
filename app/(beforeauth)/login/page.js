'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../../../firebase/clientApp';

export default function LoginPage() {
  const emailRef = useRef();
  const pswdRef = useRef();
  const [emailError, setEmailError] = useState('');
  const [pswdError, setPswdError] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    //when rendered, scroll to bottom
    window.scrollTo({
      top: 850,
      behavior: 'smooth',
      duration: 1000,
    });
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const pswd = pswdRef.current.value;

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setPswdError('');

    await signInWithEmailAndPassword(auth, email, pswd)
      .then()
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          setPswdError('Incorrect password');
        } else if (error.code === 'auth/user-not-found') {
          setEmailError('No user found with that email address');
        }
      });
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
          <div>Email: </div>
          <input
            ref={emailRef}
            className={`${
              emailError ? 'mb-3' : 'mb-6'
            } mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]`}
            type="email"
          />
          {emailError && (
            <p className="mb-3 text-[1.1rem] text-red-500">{emailError}</p>
          )}
        </label>
        <label>
          <div>Password: </div>
          <input
            ref={pswdRef}
            type="password"
            className={` ${
              pswdError ? 'mb-3' : 'mb-6'
            } mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black
              md:w-[75%]`}
            required
            minLength={8}
          />
          {pswdError && (
            <p className="mb-3 text-[1.1rem] text-red-500">{pswdError}</p>
          )}
        </label>
        <div>
          <motion.button
            onClick={handleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="duration mt-16 rounded-xl border-[5px] bg-gradient-to-b from-cyan-600 to-violet-800 px-10 py-2 font-header text-[1.2em] text-white hover:cursor-pointer hover:from-cyan-500 hover:to-violet-700"
          >
            Login
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
