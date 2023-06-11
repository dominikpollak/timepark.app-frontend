'use client';

import React from 'react';
import SlideParagraph from '../../components/paragraph';
import useWindowSize from '../../components/windowSize';

export default function HomePage() {
  const [width] = useWindowSize();

  return (
    <div className="mt-14 min-w-[100%] overflow-hidden text-center">
      <SlideParagraph initialValue={(width / 1.5) * -1}>
        Staying on task seems is a real challenge for our screen-bound
        generation. The Be Focused lets you get things done by breaking up
        individual tasks among discrete intervals, separated by short breaks.
        <br />
        <br />
        It’s a surprisingly effective way to retain motivation and focus. Create
        tasks, configure breaks and track your progress throughout the day, week
        or custom period.
      </SlideParagraph>

      <SlideParagraph initialValue={width / 1.5}>
        This app will help you to get things done by breaking up individual
        tasks among discrete intervals, separated by short breaks. It’s a great
        way to retain motivation and focus and to make learning fun.
      </SlideParagraph>

      <SlideParagraph initialValue={(width / 1.5) * -1}>
        Keep track of your progress throughout the day, week and a month and
        learn when you are most productive, so you can get more work done in
        less time.
      </SlideParagraph>
    </div>
  );
}
