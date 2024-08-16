import { useState, useRef } from "react";
import { motion } from "framer-motion";
import tanjiro1 from "../assets/images/profile-pictures/tanjiro-1.jpg";
import tanjiro2 from "../assets/images/profile-pictures/tanjiro-2.jpg";
import tanjiro3 from "../assets/images/profile-pictures/tanjiro-3.jpg";
import ConfettiExplosion from "react-confetti-explosion";

export default function ProfilePicture() {
  const pictures = [tanjiro1, tanjiro2, tanjiro3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function profileClickedHandler() {
    if (currentImageIndex === pictures.length - 1) {
      setCurrentImageIndex(0);
      return;
    }
    setCurrentImageIndex((prev) => prev + 1);
  }

  return (
    <motion.div
      initial={{
        backgroundColor: "rgba(0,0,0,0)",
      }}
      whileHover={{
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#eab308",
          "#22c553",
          "#8b5cf6",
          "#3b82f6",
        ],

        transition: {
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="flex items-center p-1 rounded-md cursor-pointer size-16"
    >
      <ConfettiExplosion />
      <img
        src={pictures[currentImageIndex]}
        alt=""
        className="rounded-md size-full"
        onClick={profileClickedHandler}
      />
    </motion.div>
  );
}
