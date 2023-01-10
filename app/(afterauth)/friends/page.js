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
    <div className="h-screen flex justify-center items-center">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          exit={{ scale: 0, opacity: 0 }}
          className="text-center w-[80%] lg:w-[50%] xl:w-[40%] h-[70%] mx-auto z-40 relative bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 rounded-2xl border-[3px] border-pink-100 duration-50"
        >
          <div className="font-header text-[2.5em] md:text-[3.5em] text-transparent bg-clip-text bg-gradient-to-b from-yellow-50 to-yellow-500 tracking-wide border-b-[3px] pb-2">
            Friends
          </div>
          <div className="h-[80%] text-[1.5em] md:text-[1.8em] xl:text-[2.1em] py-4 pl-6 mr-1 overflow-scroll overflow-x-hidden scrollhost">
            {/* <div className='scroll-bar'></div> */}

            {friendsList &&
              friendsList.map((friend) => (
                <div className="mt-12 border-b-[1px] pb-12" key={friend.name}>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-8 mb-8 ">
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
                      className="shadow-xl px-5 md:px-7 xl:px-6 py-1 text-[0.7em] md:text-[0.6em] xl:text-[0.7em] 
                border-[4px] border-white bg-gradient-to-b from-cyan-600 to-violet-800 font-header text-white hover:from-cyan-500 hover:to-violet-700 rounded-xl duration-100"
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
