'use client'
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './BouncingBall.css';

const NUM_BALLS = 5;

const BouncingBall = () => {
  const ballsRef = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);
  const controlsArray = useRef(Array.from({ length: NUM_BALLS }, () => useAnimation()));

  useEffect(() => {
    const ballProperties: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    function initializeBalls() {
      ballsRef.current.forEach((ball, index) => {
        const size = Math.floor(Math.random() * (120)) + 80;
        const x = Math.random() * (window.innerWidth - size);
        const y = Math.random() * (window.innerHeight - size);
        const vx = (Math.random() - 0.5) * 0.5; // Slower initial speed
        const vy = (Math.random() - 0.5) * 0.5; // Slower initial speed

        if (ball) {
          ball.style.width = `${size}px`;
          ball.style.height = `${size}px`;
        }

        ballProperties[index] = { x, y, vx, vy, size };
      });
    }

    function updateBalls() {
      ballProperties.forEach((props, index) => {
        props.x += props.vx;
        props.y += props.vy;

        if (props.x <= 0 || props.x >= window.innerWidth - props.size) {
          props.vx *= -1;
        }
        if (props.y <= 0 || props.y >= window.innerHeight - props.size) {
          props.vy *= -1;
        }

        controlsArray.current[index].start({ x: props.x, y: props.y });
      });

      animationFrameIdRef.current = requestAnimationFrame(updateBalls);
    }

    initializeBalls();
    updateBalls();

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, []);

  return (
    <div className='w-full -z-10 max-sm:mt-24 h-full absolute top-24 left-0'>
      <div className="bouncing-balls-container">
        {Array.from({ length: NUM_BALLS }, (_, index) => (
          <motion.div
            key={index}
            ref={(el) => { ballsRef.current[index] = el }}
            className={`ball-moving ball-${index + 1}`}
            animate={controlsArray.current[index]}
            transition={{ duration: 1, ease: 'linear' }}
          />
        ))}
      </div>
    </div>
  );
};

export default BouncingBall;
