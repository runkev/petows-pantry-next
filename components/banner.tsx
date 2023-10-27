import React from 'react';
import PropTypes from 'prop-types';
import brownies_tray from '../assets/brownies_tray.jpg';

interface BannerProps {
    title: string;
    subtitle?: string;
    prepTime?: string;
    bakeTime?: string;
    totalTime?: string;
}

const Banner = ({ title, subtitle, prepTime, bakeTime, totalTime }: BannerProps) => {
  return (
    <div className="relative flex justify-center items-center h-52 border-solid border-cookie border-y-4 bg-cover bg-no-repeat"
         style={{ backgroundImage: `url(${brownies_tray})` }}
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
            {prepTime && bakeTime && totalTime && (
                <div className="grid grid-cols-3 justify-center mt-4 text-xs md:px-32 sm:px-32 xs:px-16">
                    <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
                        <h3 className="font-semibold text-center">Prep Time</h3>
                        <p className="text-center">{prepTime} min</p>
                    </div>
                    <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
                        <h3 className="font-semibold text-center">Bake Time</h3>
                        <p className="text-center">{bakeTime} min</p>
                    </div>
                    <div className="border border-black border-solid rounded-lg mx-1 bg-cream">
                        <h3 className="font-semibold text-center">Total Time</h3>
                        <p className="text-center">{totalTime} min</p>
                    </div>
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
