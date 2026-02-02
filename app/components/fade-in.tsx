'use client';

import { motion, Variants } from 'motion/react';
import React from 'react';
import { FadeInProps } from '@/lib/definitions';

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
