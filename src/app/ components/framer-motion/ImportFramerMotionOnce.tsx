// This component is created to prevent the framer-motion library from being imported multiple times in the project.

import { motion, AnimatePresence, Transition, Variant } from "framer-motion";
import React from "react";
import { ReactNode, CSSProperties, RefObject } from "react";


export interface MotionPageProps {
  children?: ReactNode;
  initial?: any
  animate?: any
  custom?: any
  exit?: any
  transition?: Transition;
  className?: string;
  variants?: { [key: string]: Variant };
  ref?: RefObject<HTMLDivElement>;
  onClick?: () => void;
  style?: CSSProperties;
}
export const AnimatePresenceComponent = ({children}: {children: ReactNode}) => (
    <AnimatePresence>
    {children}
    </AnimatePresence>
);


// export const MotionDiv = ({ children, initial, animate, exit, transition, className, variants, ref, onClick, style }: MotionDivProps) => (
//     <motion.div
//       initial={initial}
//       animate={animate}
//       exit={exit}
//       transition={transition}
//       className={className}
//       variants={variants}
//       ref={ref}
//       onClick={onClick}
//       style={style}
//     >
//       {children}
//     </motion.div>
//   );


export const MotionDiv = ({ children, initial, animate, exit, transition, className, variants, ref, onClick, style, custom }: MotionPageProps) => (
  <motion.div
    initial={initial || { scaleY: 0 }}
    animate={animate || { scaleY: 1 }}
    exit={exit || { scaleY: 0 }}
    custom={custom}
    transition={transition || { type: 'spring', stiffness: 100, damping: 10 }}
    className={className}
    variants={variants}
    ref={ref}
    onClick={onClick}
    style={style}
  >
    {children}
  </motion.div>
);