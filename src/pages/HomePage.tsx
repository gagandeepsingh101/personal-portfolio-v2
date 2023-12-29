import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNav from '../components/BottonNav'; 
import MainScreen from '../components/MainScreen';

const HomePage: React.FC = () => {
  const [openStart,setOpenStart] = useState<boolean>(false);
  return (
    // Motion div for page transition
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 5 }}
      className="h-full w-full bg-cover bg-center bg-bgImg"
    >
      {/* Main screen component */}
      <MainScreen openStart={openStart}  />
      {/* Bottom navigation component */}
      <BottomNav setOpenStart={setOpenStart} openStart={openStart} />
    </motion.div>
  );
};

export default HomePage;
