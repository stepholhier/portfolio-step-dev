import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type BlurTextProps = {
  text: string;
  className?: string;
  animateBy?: 'words' | 'letters';
  delay?: number;
  direction?: 'top' | 'bottom';
};

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  animateBy = 'words',
  delay = 0.1,
  direction = 'top',
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // trigger slight delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <p className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((char, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            filter: 'blur(10px)',
            y: direction === 'top' ? -30 : 30,
          }}
          animate={isVisible ? {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
          } : {}}
          transition={{
            duration: 0.6,
            delay: i * delay,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
          {animateBy === 'words' && i < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
