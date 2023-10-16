import { StarIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { ratingStar } from '../../../assets/icon';

function RatingChart({
  props,
  rating,
  value
}: {
  props: any;
  rating: number;
  value: string;
  color: string;
}) {
  return (
    <div className="flex flex-row  items-center gap-2 text-[#A1A5AD]">
      {rating}
      {ratingStar()}
      <hr {...props} />
      <span className="text-[#000000]">{value}</span>
    </div>
  );
}

export default RatingChart;
