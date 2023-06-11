'use client';
import { collection, getDocs } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { auth, db } from '../../../firebase/clientApp';

export default function Statistics() {
  const [totalMinutes, setTotalMinutes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'focused_time'));
        const docs = querySnapshot.docs.map((doc) => doc.data());
        const filteredDocs = docs.filter(
          (doc) => doc.userID === auth.currentUser.uid
        );
        const minutesSum = filteredDocs.reduce(
          (acc, doc) => acc + doc.minutes,
          0
        );
        setTotalMinutes(minutesSum);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 150 }}
          exit={{ scale: 0, opacity: 0 }}
          className="duration-50 relative z-40 mx-auto flex h-[70%] w-[90%] flex-col justify-around rounded-2xl border-[3px] border-pink-100 bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 text-center font-paragraph lg:w-[70%]"
        >
          <div className="border-b-[3px] bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text pb-2 font-header text-[2.5em] tracking-wide text-transparent md:text-[3.5em]">
            Statistics
          </div>

          <div className="flex h-[85%] flex-col justify-around p-4 text-[1.3rem] sm:text-[1.5em] md:text-[1.8em] xl:text-[2.1em]">
            <div className="mt-6">
              <span className="text-white">
                <span className="text-yellow-200">Today</span> you've focused
                for{' '}
              </span>
              <span className="text-white">{totalMinutes} minutes</span>
            </div>

            <div className="mt-6">
              <span className="text-white">
                This <span className="text-yellow-200">week</span> you've
                focused for{' '}
              </span>
              <span className="text-white">{totalMinutes} minutes</span>
            </div>

            <div className="mt-6">
              <span className="text-white">
                This <span className="text-yellow-200">month</span> you've
                focused for{' '}
              </span>
              <span className="text-white">{totalMinutes} minutes</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 lg:mt-20"
            >
              <Link
                href="/statistics/details/week"
                className="rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 px-10 
                        py-1 font-header text-[1em] text-black shadow-xl duration-100 hover:from-yellow-100 hover:to-orange-400 sm:text-[2em] md:text-[1em] xl:text-[1.1em]"
              >
                Details
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
