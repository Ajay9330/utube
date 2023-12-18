import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProfessionalSkeleton = ({ color, bgcolor }) => {
  const waveAnimationStyle = {
    animation: 'waveAnimation 1s infinite',
  };

  return (
    <div className={`${color ? color : 'white'} p-2 h-full md:p-2 lg:p-4`}>
      <div className="space-y-4">
        <Skeleton className={`w-full ${bgcolor ? bgcolor : 'bg-gray-300'} rounded-md h-3 md:h-8`} style={waveAnimationStyle} />
        <Skeleton className={`h-8 w-full ${bgcolor ? bgcolor : 'bg-gray-300'} rounded-md md:h-20 lg:h-32`} style={waveAnimationStyle} />
        <Skeleton className={`h-21 w-1/2 ${bgcolor ? bgcolor : 'bg-gray-300'} rounded-md`} style={waveAnimationStyle} />
        <Skeleton className={`h-2 w-full ${bgcolor ? bgcolor : 'bg-gray-300'} rounded-md sm:h-4 md:h-9`} style={waveAnimationStyle} />
        {/* <Skeleton className="h-96 w-full bg-gray-300 rounded-md" style={waveAnimationStyle} /> */}
      </div>
    </div>
  );
}

export default ProfessionalSkeleton;
