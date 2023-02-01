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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
        est, dolores atque, ratione deserunt assumenda quo aut nisi qui rerum
        voluptatum quam earum fugiat reprehenderit repellat temporibus impedit
        ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        placeat dolorem distinctio nihil tenetur possimus porro hic numquam
        alias esse consectetur nostrum harum, voluptate commodi? Soluta aliquam
        nemo impedit sunt.
      </SlideParagraph>

      <SlideParagraph initialValue={(width / 1.5) * -1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
        est, dolores atque, ratione deserunt assumenda quo aut nisi qui rerum
        voluptatum quam earum fugiat reprehenderit repellat temporibus impedit
        ea.
      </SlideParagraph>

      <SlideParagraph initialValue={width / 1.5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad
        est, dolores atque, ratione deserunt assumenda quo aut nisi qui rerum
        voluptatum quam earum fugiat reprehenderit repellat temporibus impedit
        ea.
      </SlideParagraph>
    </div>
  );
}
