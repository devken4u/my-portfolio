import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { motion } from "framer-motion";

export default function ConfettiTest() {
  const [isExploding, setIsExploding] = useState(false);

  return (
    <div className="pb-[2000px]">
      <div
        className="bg-red-500 size-[500px] m-[100px] relative "
        onClick={() => setIsExploding(true)}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full origin-bottom bg-blue-800/50"
          initial={{
            scaleY: 1,
          }}
          animate={{
            scaleY: 0,
          }}
          transition={{
            duration: 1.5,
          }}
        ></motion.div>
        {isExploding && (
          <ConfettiExplosion
            onComplete={() => setIsExploding(false)}
            duration={1500}
          />
        )}
      </div>
    </div>
  );
}
