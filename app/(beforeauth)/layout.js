'use client'

import '../../styles/globals.css'
import Image from 'next/image'
import bgImg2 from '../../public/assets/bg2.jpg'
import Link from 'next/link'
import { useRef } from 'react'
import { motion } from 'framer-motion';

export default function RootLayout({ children }) {

  const ref = useRef(null)

  // const handleScrollCenter = () => {
  //   setTimeout(() => {
  //     ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //   }, 200)
  // }
  const handleScrollStart = () => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', duration: 1000 })
    }, 300)
  }

  return (
    <html lang='en'>
      <head />
      <body className='bg-gradient-to-r from-[#6b3506] to-[#26230b] overflow-x-hidden'>

        <Image priority={true} src={bgImg2} alt="Background image" className='nodrag z-10 object-cover max-w-[100%] min-h-[34em] max-h-[83vh] brightness-[90%] border-b-[4px] border-[#410308]/[0.2]' />

        <div className='
        z-20 absolute translate-y-[-170%] sm:translate-y-[-145%] md:translate-y-[-130%] lg:translate-y-[-118%] xl:translate-y-[-163%] 2xl:translate-y-[-170%] 3xl:translate-y-[-190%] text-center w-[100%]'>

          <Link href='/' onClick={handleScrollStart} className='text-[6.5em] sm:text-[8.5em] md:text-[10em] lg:text-[12em] 2xl:text-[14em] font-black tracking-wide font-header leading-none
            text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-orange-400 brightness-[120%] hover:brightness-[140%] duration-500'
          >TIME PARK</Link>

          <h2 className='text-[1.7em] md:text-[2em] xl:text-[2.7em] font-header brightness-[140%]
            text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 to-orange-400'
          >.APP</h2>
        </div>

        <div className='relative mx-auto translate-y-[-3%] flex justify-evenly rounded-2xl pb-8 pt-6 md:py-6 2xl:py-8 w-[85%] md:w-[100%] xl:mb-[8em]'>

          <div class="custom-shape-divider-top-1670661657 w-screen">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
            className='relative border-[5px] bg-gradient-to-b from-cyan-600 to-violet-800 rounded-xl
            font-header text-white hover:from-cyan-500 hover:to-violet-700 duration-100 shadow-xl mx-4'>
            <Link
              onClick={handleScrollStart}
              href='/login'
              className='text-[1.4em] sm:text-[2em] md:text-[2.4em] 2xl:text-[3.3em] w-full h-full inline-block px-5 md:px-7 xl:px-10 py-2 '
            >Login</Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}
            className='relative shadow-xl border-[5px] border-black bg-gradient-to-b from-yellow-200 to-orange-500 hover:from-yellow-100 hover:to-orange-400 rounded-xl font-header text-black duration-100'>
            <Link
              onClick={handleScrollStart}
              href='/signup'
              className='h-full w-full inline-block text-[1.4em] sm:text-[2em] md:text-[2.4em] 2xl:text-[3.3em] px-5 md:px-7 xl:px-10 py-2 '
            >Sign up</Link>
          </motion.div>

        </div>

        <div ref={ref}>
          {children}
        </div>
        <footer>
          <div className='text-center text-white text-xl pb-6 pt-12'>
            All rights reserved 2022
          </div>
          <div className='text-right text-white lg:text-lg text-md mr-3 mb-1'>
            pic by xxx from freepik
          </div>
        </footer>
      </body>
    </html>
  )
}
