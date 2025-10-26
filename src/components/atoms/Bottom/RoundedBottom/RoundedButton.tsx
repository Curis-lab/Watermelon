import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";



function RoundedBottom({ fn, label, icon }:{fn:()=>void, label:string, icon:ReactNode}) {
  const [ishover, setIshover] = useState(false);
  return (
    <div
      onClick={() => fn()}
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
      className={style.container}
    >
      <motion.div
        animate={{
          scale: ishover ? 70 : 1,
          backgroundColor: ishover ? "#6366f1" : "#000",
        }}
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
        style={{
          width: "6px",
          height: "6px",
          backgroundColor: "#6366f1",
          borderRadius: "50%",
          position: "absolute",
          left: "5px",
        }}
      ></motion.div>
      <motion.div
        animate={{
          x: ishover ? -8 : 8,
          color: ishover ? "#fff" : "#000",
        }}
        style={{
          zIndex: 20,
        }}
      >
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "-0.5px",
          }}
        >
          {label}
        </p>
      </motion.div>
      <motion.div
        animate={{
          x: ishover ? 0 : 24,
        }}
        className={style.icon_wrapper}
      >
        {icon}
      </motion.div>
    </div>
  );
}

export default RoundedBottom;
