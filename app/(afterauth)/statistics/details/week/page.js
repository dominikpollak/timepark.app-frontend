'use client';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BarChart from '../../../../../components/barChart';
import { auth, db } from '../../../../../firebase/clientApp';

export default function DetailsWeek() {
  const [myDocs, setMyDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'focused_time'));
        const docs = querySnapshot.docs.map((doc) => doc.data());
        const filteredDocs = docs.filter(
          (doc) => doc.userID === auth.currentUser.uid
        );
        setMyDocs(filteredDocs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const userData = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Minutes focused',
        data: daysOfWeek.map((day) => {
          const dayData = myDocs.filter((doc) => doc.dayOfWeek === day);
          const totalMinutes = dayData.reduce(
            (sum, doc) => sum + doc.minutes,
            0
          );
          return totalMinutes;
        }),
        backgroundColor: 'rgb(253 224 71)',
        borderColor: 'black',
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          font: {
            size: 15,
          },
          precision: 0,
        },
      },
      y: {
        title: {
          display: true,
          font: {
            size: 15,
          },
        },
        ticks: {
          font: {
            size: 15,
          },
          precision: 0,
        },
      },
    },
  };

  return (
    <div className="flex h-screen items-end justify-center sm:items-center">
      <div className="relative z-40 mx-auto mb-4 h-[85%] w-[95%] rounded-2xl border-[3px] border-pink-100 bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 text-center duration-100 sm:mb-0 sm:h-[80%] lg:w-[70%]">
        <div className="border-b-[3px] bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text p-3 font-header text-[2.5em] tracking-wide text-transparent md:text-[3.5em]">
          Week Statistics
        </div>

        <div className="flex h-[80%] flex-col justify-center p-4 text-[1.5em] lg:text-[1.8em]">
          <div className="relative mb-12 flex h-[80%] w-full items-start justify-center">
            <div className="h-[90%] w-[100%] md:h-[100%] lg:w-[90%] 2xl:h-[95%]">
              <BarChart chartData={userData} chartOptions={chartOptions} />
            </div>
          </div>

          <div className="flex justify-around">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 left-4 sm:left-auto"
            >
              <Link
                href="/statistics/details/month"
                className="rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 px-5 py-1 
                font-header text-[1em] text-black shadow-xl duration-100 hover:from-yellow-100 hover:to-orange-400 md:px-7 md:text-[1em] xl:px-12 xl:text-[1.1em]"
              >
                Month
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 right-4"
            >
              <Link
                href="/statistics"
                className="rounded-xl border-[4px] border-white bg-gradient-to-b from-cyan-600 to-violet-800 px-5 py-1 
                font-header text-[0.7em] text-white shadow-xl duration-100 hover:from-cyan-500 hover:to-violet-700 md:px-7 md:text-[0.6em] xl:px-6 xl:text-[0.7em]"
              >
                Summary
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
