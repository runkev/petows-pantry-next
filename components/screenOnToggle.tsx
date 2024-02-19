import React, { useState } from 'react';
import NoSleep from 'nosleep.js';

const ScreenWakeLockToggle = () => {
  const [noSleep, setNoSleep] = useState(new NoSleep());
  const [wakeLockEnabled, setWakeLockEnabled] = useState(false);

  const toggleWakeLock = () => {
    if (!wakeLockEnabled) {
      noSleep.enable(); // Keep the screen on!
      setWakeLockEnabled(true);
    } else {
      noSleep.disable(); // Let the screen turn off.
      setWakeLockEnabled(false);
    }
  };

  return (
    <div className="flex items-center mt-2">
        <p className="mr-2">Keep screen on:</p>
        <label
            className={`flex items-center ${
            wakeLockEnabled ? "text-green-500" : "text-red-500"
            }`}
        >
        <input
            type="checkbox"
            checked={wakeLockEnabled}
            onChange={toggleWakeLock}
            className="hidden"  
        />
        <span
            className={`relative w-10 h-6 rounded-full transition-colors ease-in-out duration-200 ${
                wakeLockEnabled ? "bg-green-500" : "bg-red-200"
            }`}
        >
            <span
                className={`inline-block w-4 h-4 transform translate-x-0.5 translate-y-0.5 rounded-full bg-white shadow ease-in-out duration-200 ${
                wakeLockEnabled ? "translate-x-5" : "translate-x-0"
                }`}
            />
        </span>
        <span className="ml-2">
            {wakeLockEnabled ? "Yes" : "No"}
        </span>
      </label>
    </div>
  );
};

export default ScreenWakeLockToggle;
