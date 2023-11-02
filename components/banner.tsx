import React from 'react';
import PropTypes from 'prop-types';

interface BannerProps {
    title: string;
    subtitle?: string;
    prepTime?: string;
    bakeTime?: string;
    totalTime?: string;
}

const Banner = ({ title, subtitle, prepTime, bakeTime, totalTime }: BannerProps) => {
  
    const timeTypes = [
        { label: "Prep Time", value: prepTime },
        { label: "Bake Time", value: bakeTime },
        { label: "Total Time", value: totalTime }
    ]; 
  
    return (
    <div className="relative flex justify-center items-center h-52 border-solid border-cookie border-y-4 bg-cover bg-no-repeat"
         style={{ backgroundImage: `url('/assets/brownies_tray.jpg')` }}
    >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-white mb-2 px-2 uppercase">
                {title}
            </h1>
            {subtitle && (
                <p className="text-xl text-center text-cookie px-2">
                    {subtitle}
                </p>
            )}
            {timeTypes.every(time => time.value) && (
                <div className="grid grid-cols-3 justify-center mt-4 text-xs md:px-32 sm:px-32 xs:px-16">
                    {timeTypes.map((time, index) => (
                        <div key={index} className="border border-black border-solid rounded-lg mx-1 bg-cream p-1">
                            <h3 className="font-semibold text-center">{time.label}</h3>
                            <p className="text-center">{time.value} min</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    prepTime: PropTypes.string,
    bakeTime: PropTypes.string,
    totalTime: PropTypes.string,
};

export default Banner;
