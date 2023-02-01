'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import BarChart from '../../../../../components/barChart';
import { useState } from 'react';

export default function DetailsMonth() {
  const monthData = [
    {
      date: '1.3.2022',
      minutesFocused: 180,
    },
    {
      date: '2.3.2022',
      minutesFocused: 120,
    },
    {
      date: '3.3.2022',
      minutesFocused: 220,
    },
    {
      date: '4.3.2022',
      minutesFocused: 60,
    },
    {
      date: '5.3.2022',
      minutesFocused: 100,
    },
    {
      date: '6.3.2022',
      minutesFocused: 30,
    },
    {
      date: '7.3.2022',
      minutesFocused: 180,
    },
    {
      date: '8.3.2022',
      minutesFocused: 280,
    },
    {
      date: '9.3.2022',
      minutesFocused: 110,
    },
    {
      date: '10.3.2022',
      minutesFocused: 180,
    },
    {
      date: '11.3.2022',
      minutesFocused: 180,
    },
    {
      date: '12.3.2022',
      minutesFocused: 90,
    },
    {
      date: '13.3.2022',
      minutesFocused: 120,
    },
    {
      date: '14.3.2022',
      minutesFocused: 100,
    },
    {
      date: '15.3.2022',
      minutesFocused: 130,
    },
    {
      date: '16.3.2022',
      minutesFocused: 180,
    },
    {
      date: '17.3.2022',
      minutesFocused: 190,
    },
    {
      date: '18.3.2022',
      minutesFocused: 210,
    },
    {
      date: '19.3.2022',
      minutesFocused: 140,
    },
    {
      date: '20.3.2022',
      minutesFocused: 140,
    },
    {
      date: '21.3.2022',
      minutesFocused: 50,
    },
    {
      date: '22.3.2022',
      minutesFocused: 50,
    },
    {
      date: '23.3.2022',
      minutesFocused: 110,
    },
    {
      date: '24.3.2022',
      minutesFocused: 80,
    },
    {
      date: '25.3.2022',
      minutesFocused: 220,
    },
    {
      date: '26.3.2022',
      minutesFocused: 100,
    },
    {
      date: '27.3.2022',
      minutesFocused: 140,
    },
    {
      date: '28.3.2022',
      minutesFocused: 200,
    },
    {
      date: '29.3.2022',
      minutesFocused: 150,
    },
    {
      date: '30.3.2022',
      minutesFocused: 120,
    },
  ];

  const [userData, setUserData] = useState({
    labels: monthData.map((data) => data.date),
    datasets: [
      {
        label: 'Minutes focused',
        data: monthData.map((data) => data.minutesFocused),
        backgroundColor: 'rgb(253 224 71)',
        borderColor: 'black',
        borderWidth: 3,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        ticks: {
          font: {
            size: 13,
          },
        },
      },
    },
  });

  return (
    <div className="flex h-screen items-end justify-center sm:items-center">
      <div className="relative z-40 mx-auto mb-4 h-[85%] w-[95%] rounded-2xl border-[3px] border-pink-100 bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 text-center duration-100 sm:mb-0 sm:h-[80%] lg:w-[70%]">
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
