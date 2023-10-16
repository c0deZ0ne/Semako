import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ChartMap from './ChartMap';
import { chartmapType } from '../../../../utils/interfaces';
import { nanoid } from 'nanoid';
function Barchart() {
  const chartMap: chartmapType[] = [
    {
      title: 'Websites',
      color: 'bg-[#DBE2FF]'
    },
    {
      title: 'E-commerce',
      color: 'bg-[#4B6EFF]'
    },
    {
      title: 'Domains',
      color: 'bg-[#A5B7FF]'
    }
  ];
  const options: any = {
    plugins: {
      legend: {
        display: false,
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function (context: {
            dataset: { label: string };
            formattedValue: string;
          }) {
            return context.dataset.label + ': ' + context.formattedValue;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        type: 'linear',
        min: 200,
        max: 1000,
        grid: {
          drawBorder: false
        }
      }
    }
  };

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],

    datasets: [
      {
        label: 'Website',
        data: [500, 400, 300, 400, 500, 300, 400],
        backgroundColor: 'rgba(219, 226, 255, 1)',
        borderColor: 'rgba(219, 226, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'E-commerce',
        data: [300, 400, 700, 450, 600, 400, 300],
        backgroundColor: 'rgba(93, 125, 255, 1)',
        borderColor: 'rgba(93, 125, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Domain',
        data: [300, 500, 400, 500, 100, 400, 500],
        backgroundColor: 'rgba(165, 183, 255, 1)',
        borderColor: 'rgba(165, 183, 255, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <>
      <div className="flex flex-col  w-[100%] h-[100%] ">
        <div className="flex flex-row justify-end md:sticky mr-10 top-1  ">
          {chartMap.map((data) => (
            <div className="" key={nanoid(5)}>
              <ChartMap data={data} />
            </div>
          ))}
        </div>
        <Bar
          width={'1024px'}
          height={'500px'}
          data={data}
          options={options}
          className=" flex w-[1024px]  h-[90%]"
        />
      </div>
    </>
  );
}

export default Barchart;
