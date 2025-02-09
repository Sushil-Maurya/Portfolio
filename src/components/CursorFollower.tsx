import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    // <div className='fixed inset-0 bg-black'>
    <motion.div
      className='w-8 h-8 bg-white rounded-full fixed pointer-events-none'
      animate={{
        x: position.x + 30,
        y: position.y + 30,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        position: "fixed",
        mixBlendMode: "difference",
      }}
    />
    // </div>
  );
};

export default CursorFollower;
