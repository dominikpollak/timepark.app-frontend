'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto';
import useWindowSize from './windowSize';

export default function BarChart({ chartData, chartOptions }) {
  const [width] = useWindowSize();

  if (width < 500) {
    defaults.font.size = 12;
  } else {
    defaults.font.size = 16;
  }

  defaults.font.size = 16;
  defaults.color = 'white';
  defaults.font.family = 'lilita one';
  defaults.scale.grid.display = false;
  defaults.datasets.bar.hoverBackgroundColor = 'rgb(254 249 195)';
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  //options animations
  return <Bar data={chartData} options={chartOptions} />;
}
