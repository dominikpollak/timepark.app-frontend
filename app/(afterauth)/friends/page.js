'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProfilePhoto from '../../../public/assets/profilePhoto.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export default function Friends() {
  const friendsList = [
    {
      photo: ProfilePhoto,
      name: '#Mario1232',
    },
    {
      photo: ProfilePhoto,
      name: '#Peter3241',
    },
    {
      photo: ProfilePhoto,
      name: '#Steve2423',
    },
    {
      photo: ProfilePhoto,
      name: '#Mario124124',
    },
    {
      photo: ProfilePhoto,
      name: '#Luigi123123',
    },
    {
      photo: ProfilePhoto,
      name: '#Roger111',
    },
    {
      photo: ProfilePhoto,
      name: '#Victor4343',
    },
    {
      photo: ProfilePhoto,
      name: '#Peter664',
    },
    {
      photo: ProfilePhoto,
      name: '#Derek3453',
    },
    {
      photo: ProfilePhoto,
      name: '#Louis345354',
    },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          exit={{ scale: 0, opacity: 0 }}
          className="duration-50 relative z-40 mx-auto h-[70%] w-[80%] rounded-2xl border-[3px] border-pink-100 bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 text-center lg:w-[50%] xl:w-[40%]"
        >
          <div className="border-b-[3px] bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text pb-2 font-header text-[2.5em] tracking-wide text-transparent md:text-[3.5em]">
            Friends
          </div>
          <div className="scrollhost mr-1 h-[80%] overflow-scroll overflow-x-hidden py-4 pl-6 text-[1.5em] md:text-[1.8em] xl:text-[2.1em]">
            {/* <div className='scroll-bar'></div> */}

            {friendsList &&
              friendsList.map((friend) => (
                <div className="mt-12 border-b-[1px] pb-12" key={friend.name}>
                  <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row lg:gap-8 ">
                    <div>
                      <Image
                        src={friend.photo}
                        width={90}
                        height={90}
                        alt="Friend's profile photo"
                        className="nodrag rounded-full"
                      />
                    </div>
                    <div className="font-paragraph text-yellow-200">
                      {friend.name}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href="/friends/id"
                      className="rounded-xl border-[4px] border-white bg-gradient-to-b from-cyan-600 to-violet-800 px-5 py-1 
                font-header text-[0.7em] text-white shadow-xl duration-100 hover:from-cyan-500 hover:to-violet-700 md:px-7 md:text-[0.6em] xl:px-6 xl:text-[0.7em]"
                    >
                      Show
                    </Link>
                  </motion.div>
                </div>
              ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
