'use client';

import React, { useRef, useState } from 'react';
import VolumeOff from '../../public/assets/volume_off.png';
import VolumeOn from '../../public/assets/volume_on.png';
import '../../styles/globals.css';
import Bg2 from '../../public/assets/bg2.jpg';
import Image from 'next/image';
import SideMenu from '../../components/sideMenu';
import MenuIcon from '../../public/assets/menu.png';
import TimerContext from '../../context/TimerContext';
import ProfilePhoto from '../../public/assets/profilePhoto.jpeg';
import Link from 'next/link';

export default function Layout({ children }) {
  const [soundsOn, setSoundsOn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [timerOn, setTimerOn] = useState(false);
  const menuRef = useRef();

  return (
    <html className="h-[100%] overflow-hidden" lang="en">
      <head />

      <body>
        {!timerOn && (
          <Link
            href="/statistics"
            className="absolute top-[1.2em] left-[1.2em] z-[60]"
          >
            <div className="flex items-center">
              <Image
                src={ProfilePhoto}
                width={70}
                height={70}
                alt="Your profile photo"
                className="nodrag w-[50px] md-w-[70px] rounded-full"
              ></Image>
              <span className="ml-4 text-yellow-200 font-paragraph text-xl md:text-2xl">
                Matthew
              </span>
            </div>
          </Link>
        )}

        {timerOn ? (
          <div className="fixed right-[1.5em] top-[1.25em] z-[60]">
            {soundsOn ? (
              <Image
                src={VolumeOn}
                alt="Turn audio off icon"
                height={35}
                width={35}
                className="invert hover:invert-[.75] hover:cursor-pointer"
                onClick={() => setSoundsOn(!soundsOn)}
              />
            ) : (
              <Image
                src={VolumeOff}
                alt="Turn audio on icon"
                height={35}
                width={35}
                className="invert hover:invert-[.75] hover:cursor-pointer"
                onClick={() => setSoundsOn(!soundsOn)}
              />
            )}
          </div>
        ) : (
          <div className="fixed right-[1.5em] top-[1.2em] z-[60]" ref={menuRef}>
            <Image
              src={MenuIcon}
              alt="Menu icon"
              height={50}
              width={40}
              className="invert hover:invert-[.75] cursor-pointer"
              onClick={() => setIsToggled(!isToggled)}
            />
          </div>
        )}

        <SideMenu
          isToggled={isToggled}
          setIsToggled={setIsToggled}
          menuRef={menuRef}
        />

        <div className="anim relative z-20 h-0 ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Image
          src={Bg2}
          alt="Background Image"
          className="nodrag h-screen object-cover object-[0%] md:object-[85%] lg:object-center fixed z-10"
        />

        <TimerContext.Provider value={{ timerOn, setTimerOn }}>
          {children}
        </TimerContext.Provider>
      </body>
    </html>
  );
}
