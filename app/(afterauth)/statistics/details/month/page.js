'use client';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import BarChart from '../../../../../components/barChart';
import { auth, db } from '../../../../../firebase/clientApp';

export default function DetailsMonth() {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Minutes focused',
        data: [],
        backgroundColor: 'rgb(253 224 71)',
        borderColor: 'black',
        borderWidth: 3,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'focused_time'));
        const docs = querySnapshot.docs.filter(
          (doc) => doc.userID === auth.currentUser.uid
        );
        const monthData = docs.map((doc) => ({
          date: doc.date.split('-').reverse().join('.'),
          minutesFocused: Math.round(doc.minutes),
        }));

        // Get current month and year
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // January is 0
        const currentYear = currentDate.getFullYear();

        // Generate labels for the entire month
        const labels = [];
        const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
          labels.push(`${i}.${currentMonth}.`);
        }

        // Assign data to the available dates
        const data = Array(daysInMonth).fill(null);
        monthData.forEach((dataPoint) => {
          const [day, month] = dataPoint.date.split('.');
          const index = parseInt(day, 10) - 1;
          if (parseInt(month, 10) === currentMonth) {
            data[index] = dataPoint.minutesFocused;
          }
        });

        setUserData((prevData) => ({
          ...prevData,
          labels,
          datasets: [
            {
              ...prevData.datasets[0],
              data,
            },
          ],
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis from zero
        ticks: {
          font: {
            size: 13,
          },
          precision: 0, // Display whole numbers only
        },
      },
      x: {
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
  };
  return (
    <div className="flex h-screen items-end justify-center sm:items-center">
      <div className="relative z-40 mx-auto mb-4 h-[85%] w-[95%] rounded-2xl border-[3px] border-pink-100 bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 text-center duration-100 sm:mb-0 sm:h-[80%] lg:w-[85%]">
        <div className="border-b-[3px] bg-gradient-to-b from-yellow-50 to-yellow-500 bg-clip-text p-3 font-header text-[2.5em] tracking-wide text-transparent md:text-[3.5em]">
          Month Statistics
        </div>

        <div className="flex h-[80%] flex-col justify-center p-4 text-[1.5em] lg:text-[1.8em]">
          <div className="relative mb-12 flex h-[70%] w-full items-start justify-center">
            <div className="h-[90%] w-[100%] md:h-[100%] lg:w-[90%] 2xl:h-[95%]">
              <BarChart chartData={userData} chartOptions={chartOptions} />
            </div>
          </div>

          <div className="flex justify-around">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="absolute bottom-4 left-4 sm:left-auto "
            >
              <Link
                href="/statistics/details/week"
                className="rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 px-[1.8rem] py-1 
                font-header text-[1em] tracking-wide text-black shadow-xl duration-100 hover:from-yellow-100 hover:to-orange-400 md:text-[1em] xl:px-14 xl:text-[1.1em]"
              >
                Week
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
