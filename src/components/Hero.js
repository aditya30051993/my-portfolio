import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="hero">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hi, I'm Dr. Aditya Kumar Gupta
    </motion.h1>
    <p>A passionate developer</p>
  </section>
);

export default Hero;
