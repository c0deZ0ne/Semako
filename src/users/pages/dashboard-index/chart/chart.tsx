import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import ChartMap from './ChartMap';
import { chartmapType } from '../../../../utils/interfaces';
import { nanoid } from 'nanoid';
function Barchart() {
  const chartMap: chartmapType[] = [
    {
      title: 'Earning',
      color: 'bg-[#00AA55]'
    },
    {
      title: 'Deductions',
      color: 'bg-[#FA3246]'
    },
    {
      title: 'Service fee',
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
        label: 'Earnings',
        data: [800, 600, 900, 750, 1000, 500, 400],
        backgroundColor: '#00AA55',
        borderColor: 'rgba(219, 226, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Deductions',
        data: [300, 400, 300, 450, 600, 400, 300],
        backgroundColor: '#FA3246',
        borderColor: 'rgba(93, 125, 255, 1)',
        borderWidth: 1
      },
      {
        label: 'Service',
        data: [300, 300, 400, 300, 100, 400, 300],
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
