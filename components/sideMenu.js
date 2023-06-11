'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { auth } from '../firebase/clientApp';

export default function SideMenu({ isToggled, setIsToggled, menuRef }) {
  const sidebarRef = useRef();

  const handleLogou = () => {
    auth.signOut();
  };

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      trasition: {
        duration: 0.4,
        type: 'spring',
        damping: 100,
        stiffness: 400,
      },
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  const untoggle = () => {
    setTimeout(() => setIsToggled(false), 100);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        (!sidebarRef.current.contains(event.target) ||
          menuRef.current.contains(event.target))
      ) {
        event.stopPropagation();
        setIsToggled(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isToggled]);

  return (
    <AnimatePresence>
      {isToggled && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          ref={sidebarRef}
          className="fixed right-0 top-1 z-50 h-[30em] w-[12em] overflow-hidden rounded-2xl border-[4px] border-white bg-[#101a04]/[0.6] backdrop-blur-lg md:h-[33em] md:w-[16em]"
        >
          {/* className='fixed right-2 top-2 h-[33em] w-[16em] border-[5px] border-[#814833] bg-[#3c150a] rounded-2xl z-50 overflow-hidden'> */}

          <div className="flex h-[92%] flex-col items-center justify-between pt-[40%] text-center font-paragraph text-[1.4em] tracking-wide md:text-[1.7em]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b text-white shadow-xl duration-100 hover:bg-purple-500/[0.25]"
            >
              <Link
                href="/timer"
                className="block h-full w-full px-5 md:px-7 xl:px-10"
                onClick={untoggle}
              >
                Focus
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b text-white shadow-xl duration-100 hover:bg-purple-500/[0.25]"
            >
              <Link
                href="/statistics"
                className="block h-full w-full px-5 md:px-7 xl:px-10"
                onClick={untoggle}
              >
                Statistics
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b text-white shadow-xl duration-100 hover:bg-purple-500/[0.25]"
            >
              <Link
                href="/friends"
                className="block h-full w-full px-5 md:px-7 xl:px-10"
                onClick={untoggle}
              >
                Friends
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b text-white shadow-xl duration-100 hover:bg-purple-500/[0.25]"
            >
              <Link
                href="/store"
                className="block h-full w-full px-5 md:px-7 xl:px-10"
                onClick={untoggle}
              >
                Store
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b text-white shadow-xl duration-100 hover:bg-purple-500/[0.25]"
            >
              <Link
                href="/settings"
                className="block h-full w-full px-5 md:px-7 xl:px-10"
                onClick={untoggle}
              >
                Settings
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLogou}
              className="w-[80%] rounded-xl border-[4px] border-white bg-transparent bg-gradient-to-b px-5 text-white duration-100 hover:bg-purple-500/[0.25] md:px-7 xl:px-10"
            >
              Logout
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
