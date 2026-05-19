import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 5,
  className,
}) {
  const [displayText, setDisplayText] = useState(text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join(''));
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    }
  }, [inView]);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    if (isAnimating) {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split('')
            .map((char, index) => {
              if (index < Math.floor(iteration)) {
                return text[index];
              }
              if (text[index] === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setDisplayText(text);
        }

        iteration += maxIterations / 10;
      }, speed);
    }

    return () => clearInterval(interval);
  }, [text, isAnimating, speed, maxIterations]);

  return (
    <span className={className} ref={ref}>
      {displayText}
    </span>
  );
}
