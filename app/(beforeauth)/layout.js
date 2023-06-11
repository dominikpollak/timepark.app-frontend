'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { auth } from '../../firebase/clientApp';
import bgImg2 from '../../public/assets/bg2.jpg';
import '../../styles/globals.css';
import LoadingWheel from '../../components/LoadingWheel';

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleScrollStart = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 1000,
      });
    }, 300);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/timer');
        return;
      }
      setLoading(false);
    });
  }, [router, loading]);

  if (loading)
    return (
      <html>
        <body className="bg-[#573205]">
          <LoadingWheel />
        </body>
      </html>
    );

  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden bg-gradient-to-r from-[#6b3506] to-[#26230b]">
        <Image
          priority
          src={bgImg2}
          alt="Background image"
          className="nodrag z-10 max-h-[83vh] min-h-[34em] max-w-[100%] border-b-[4px] border-[#410308]/[0.2] object-cover brightness-[90%]"
        />

        <div
          className="
        absolute z-20 w-[100%] translate-y-[-170%] text-center sm:translate-y-[-145%] md:translate-y-[-130%] lg:translate-y-[-118%] xl:translate-y-[-163%] 2xl:translate-y-[-170%] 3xl:translate-y-[-190%]"
        >
          <Link
            href="/"
            onClick={handleScrollStart}
            className="bg-gradient-to-b from-yellow-100 to-orange-400 bg-clip-text font-header text-[6.5em] font-black leading-none tracking-wide
            text-transparent brightness-[120%] duration-500 hover:brightness-[140%] sm:text-[8.5em] md:text-[10em] lg:text-[12em] 2xl:text-[14em]"
          >
            TIME PARK
          </Link>

          <h2
            className="bg-gradient-to-b from-yellow-100 to-orange-400 bg-clip-text font-header
            text-[1.7em] text-transparent brightness-[140%] md:text-[2em] xl:text-[2.7em]"
          >
            .APP
          </h2>
        </div>

        <div className="relative mx-auto flex w-[85%] translate-y-[-3%] justify-evenly rounded-2xl pb-8 pt-6 md:w-[100%] md:py-6 xl:mb-[8em] 2xl:py-8">
          <div className="custom-shape-divider-top-1670661657 w-screen">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              />
            </svg>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="relative mx-4 rounded-xl border-[5px] bg-gradient-to-b from-cyan-600
            to-violet-800 font-header text-white shadow-xl duration-100 hover:from-cyan-500 hover:to-violet-700"
          >
            <Link
              onClick={handleScrollStart}
              href="/login"
              className="inline-block h-full w-full px-5 py-2 text-[1.4em] sm:text-[2em] md:px-7 md:text-[2.4em] xl:px-10 2xl:text-[3.3em] "
            >
              Login
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="relative rounded-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 font-header text-black shadow-xl duration-100 hover:from-yellow-100 hover:to-orange-400"
          >
            <Link
              onClick={handleScrollStart}
              href="/signup"
              className="inline-block h-full w-full px-5 py-2 text-[1.4em] sm:text-[2em] md:px-7 md:text-[2.4em] xl:px-10 2xl:text-[3.3em] "
            >
              Sign up
            </Link>
          </motion.div>
        </div>

        <div ref={ref}>{children}</div>
        <footer>
          <div className="pb-6 pt-12 text-center text-xl text-white">
            All rights reserved 2022
          </div>
          <div className="text-md mr-3 mb-1 text-right text-white lg:text-lg">
            pic by xxx from freepik
          </div>
        </footer>
      </body>
    </html>
  );
}
