'use client';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { motion } from 'framer-motion';
import React, { use, useEffect, useRef, useState } from 'react';
import { auth } from '../../../firebase/clientApp';

export default function SignupPage() {
  const emailRef = useRef();
  const pswdRef = useRef();
  const pswd2Ref = useRef();
  const [pswdError, setPswdError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    //when rendered, scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const pswd = pswdRef.current.value;
    const pswd2 = pswd2Ref.current.value;

    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');

    if (pswd !== pswd2) {
      setPswdError("Passwords don't match");
      return;
    }
    setPswdError('');

    await createUserWithEmailAndPassword(auth, email, pswd)
      .then((userCredential) => {
        const user = userCredential.user;
        auth.currentUser = user;
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode === 'auth/email-already-in-use') {
          setEmailError('Email address is already in use');
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
        onSubmit={handleSignup}
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
        <label>
          <div>Repeat password: </div>
          <input
            ref={pswd2Ref}
            className="mt-2 w-[100%] rounded-3xl py-2 px-4 text-center font-paragraph text-black md:w-[75%]"
            type="password"
          />
        </label>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="mt-16 rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 px-10 py-2 font-header text-[1.2em] text-black duration-100 hover:cursor-pointer hover:from-yellow-100 hover:to-orange-400"
            type="submit"
          >
            Sign up
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
