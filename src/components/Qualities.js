import React from 'react'

const qualities = ["Technical Skills", "Organize", "Problem Solving", "Attention to Details", "Versatile", "Continuous Learner", "Adaptable", "Effective Communication", "Ethical", "Creative", "Time Management", "Team Player", "Critical Thinking", "Focus"];

const qualitiesMap = () => {
  return (
    <div className='flex justify-around flex-wrap p-3 gap-3'>
      {qualities.map(quality => (
        <p key={quality} className="whitespace-nowrap font-bold text-white text-sm">{quality}</p>
      ))}
    </div>
  );
};

const Qualities = () => {
  return (
    <div className="w-full bg-gray-900">
      {qualitiesMap()}
    </div>
  );
}

export default Qualities
