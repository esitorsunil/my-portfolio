import { motion } from 'framer-motion';

const getVariants = (direction) => {
  switch (direction) {
    case 'right':
      return {
        initial: { opacity: 0, x: '100vw' },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '-100vw' },
      };
    case 'left':
      return {
        initial: { opacity: 0, x: '-100vw' },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: '100vw' },
      };
    case 'down':
      return {
        initial: { opacity: 0, y: '-100vh' },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: '100vh' },
      };
    case 'up':
    default:
      return {
        initial: { opacity: 0, y: '100vh' },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: '-100vh' },
      };
  }
};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function PageWrapper({ children, direction = 'up' }) {
  const variants = getVariants(direction);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        transition={transition}
        style={{ position: 'absolute', width: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
