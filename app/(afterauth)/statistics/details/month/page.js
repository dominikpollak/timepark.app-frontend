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
    <div className="h-screen flex justify-center items-center">
      <div className="text-center w-[95%] lg:w-[70%] h-[80%] mx-auto z-40 relative bg-gradient-to-br from-slate-800/[0.9] to-slate-900/[0.9] pt-4 rounded-2xl border-[3px] border-pink-100 duration-100">
        <div className="font-header text-[2.5em] md:text-[3.5em] p-3 text-transparent bg-clip-text bg-gradient-to-b from-yellow-50 to-yellow-500 tracking-wide border-b-[3px]">
          Month Statistics
        </div>

        <div className="h-[80%] flex flex-col justify-center text-[1.5em] lg:text-[1.8em] p-4">
          <div className="relative flex justify-center items-start w-full h-[70%] mb-12">
            <div className="w-[100%] lg:w-[90%] h-[90%] md:h-[100%] 2xl:h-[95%]">
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
                className="shadow-xl px-[1.8rem] tracking-wide xl:px-14 py-1 text-[1em] md:text-[1em] xl:text-[1.1em] 
                border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 hover:from-yellow-100 hover:to-orange-400 rounded-xl font-header text-black duration-100"
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
                className="shadow-xl px-5 md:px-7 xl:px-6 py-1 text-[0.7em] md:text-[0.6em] xl:text-[0.7em] 
                border-[4px] border-white bg-gradient-to-b from-cyan-600 to-violet-800 font-header text-white hover:from-cyan-500 hover:to-violet-700 rounded-xl duration-100"
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
