import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { SiWindows11 } from 'react-icons/si';
import { ThreeDots } from 'react-loader-spinner';

const LoaderPage: React.FC = () => {
  return (
    // AnimatePresence to handle component presence transitions
    <AnimatePresence>
      {/* Loading animation container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-col justify-center items-center"
      >
        {/* Windows 11 icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="h-fit w-fit"
        >
          <SiWindows11 className="w-32 h-32 m-auto text-sky-500" />
        </motion.div>

        {/* Three dots loading spinner */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 2, delay: 2 }}
          className="h-fit w-fit"
        >
          <ThreeDots color="#00BFFF" ariaLabel="loading" height={80} width={80} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoaderPage;
