'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion';


export default function SideMenu({ isToggled, setIsToggled, menuRef }) {

    const sidebarRef = useRef()

    const logout = () => {
        console.log('lul')
    }

    const dropIn = {
        hidden: {
            y: '-100vh',
            opacity: 0
        },
        visible: {
            y: '0',
            opacity: 1,
            trasition: {
                duration: 0.4,
                type: 'spring',
                damping: 100,
                stiffness: 400
            }
        },
        exit: {
            y: '-100vh',
            opacity: 0,

        }
    }

    const untoggle = () => {
        setTimeout(() => setIsToggled(false)
            , 100)
    }

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (sidebarRef.current && (!sidebarRef.current.contains(event.target) || menuRef.current.contains(event.target))) {
                event.stopPropagation()
                setIsToggled(false)
            }
        }
        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [isToggled])

    return (
        <AnimatePresence >
            {isToggled &&
                <motion.div variants={dropIn} initial="hidden" animate='visible' exit='exit'
                    ref={sidebarRef}
                    className='fixed right-0 top-1 h-[28em] lg:h-[33em] w-[12em] lg:w-[16em] border-[4px] border-white bg-[#101a04]/[0.6] backdrop-blur-lg rounded-2xl z-50 overflow-hidden'>
                    {/* className='fixed right-2 top-2 h-[33em] w-[16em] border-[5px] border-[#814833] bg-[#3c150a] rounded-2xl z-50 overflow-hidden'> */}

                    <div className='h-[92%] pt-[33%] flex flex-col items-center justify-between text-center text-[1.4em] sm:text-[2em] xl:text-[1.7em] font-paragraph tracking-wide'>


                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='shadow-xl w-[80%] border-[4px] border-white bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100'>
                            <Link href='/timer' className='w-full h-full block px-5 md:px-7 xl:px-10' onClick={untoggle}
                            >Focus</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='shadow-xl w-[80%] border-[4px] border-white bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100'>
                            <Link href='/statistics' className='w-full h-full block px-5 md:px-7 xl:px-10' onClick={untoggle}
                            >Statistics</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='shadow-xl w-[80%] border-[4px] border-white bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100'>
                            <Link href='/friends' className='w-full h-full block px-5 md:px-7 xl:px-10' onClick={untoggle}
                            >Friends</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='shadow-xl w-[80%] border-[4px] border-white bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100'>
                            <Link href='/store' className='w-full h-full block px-5 md:px-7 xl:px-10' onClick={untoggle}
                            >Store</Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} className='shadow-xl w-[80%] border-[4px] border-white bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100'>
                            <Link href='/settings' className='w-full h-full block px-5 md:px-7 xl:px-10' onClick={untoggle}
                            >Settings</Link>
                        </motion.div>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }} onClick={logout} className='border-[4px] border-white px-5 md:px-7 xl:px-10 bg-gradient-to-b bg-transparent hover:bg-purple-500/[0.25] rounded-xl text-white duration-100 w-[80%]'
                        >Logout</motion.button>
                    </div>

                </motion.div>
            }
        </AnimatePresence>
    )
}
