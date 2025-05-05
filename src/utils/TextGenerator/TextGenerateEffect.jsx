"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "./cn";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.3,
  staggerDelay = 0.05, // Added staggerDelay prop with a much smaller default value
  threshold = 0.3 // Added threshold for intersection observer
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  let wordsArray = words.split(" ");
  
  // Use intersection observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);

  // Trigger animation only when visible and hasn't animated before
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      animate("span", {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      }, {
        duration: duration ? duration : 1,
        delay: stagger(staggerDelay), // Use the custom staggerDelay
        ease: "easeOut", // Added easing for smoother animation
      });
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated, scope, animate, duration, staggerDelay, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-unactive text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className={cn("", className)}>
      <div className="">
        <div
          className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
