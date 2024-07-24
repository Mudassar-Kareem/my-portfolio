import React from "react";
import "./Tro.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import glass from "../../img/glassesimoji.png";
import { SiLeetcode } from "react-icons/si";
import Crown from "../../img/crown.png";
import thump from "../../img/thumbup.png";
import vector1 from "../../img/Vector2.png";
import vector from "../../img/Vector1.png";
import screen from "../../img/img.png";
import FloatingDiv from "../float/FloatingDiv";
import { motion } from "framer-motion";

const Tro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="tro">
      <div className="t-left">
        <div className="t-name">
          <span>Hey! I Am</span>
          <span> Mudassar Kareem</span>
          <span style={{ fontSize: "20px"}}>
            {" "}
            Mern Stack Developer with high level of experience in web desiging
            and development, producting the Quality work{" "}
          </span>
        </div>
        <a href="mailto:mudassarkareem916@gmail.com" target="_blank">
          <button className="button">Hire Me</button>
        </a>

        <div className="t-icon">
          <a href="https://github.com/Mudassar-Kareem" target="_blank">
          <span> <FaGithub size={30}/> </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mudassar-kareem-4874032bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
             <span> <FaLinkedin size={ 30}/> </span>
          </a>
          <a
            href="https://www.instagram.com/_mudassar_kareem?igsh=MWc4bHdzZGt0ZXk4bw=="
            target="_blank"
          >
            <span><FaInstagram size={ 30}/> </span>
          </a>
          <a
            href="https://leetcode.com/u/Mudassarkareem/"
            target="_blank"
          >
            <span><SiLeetcode size={ 30}/> </span>
          </a>
        </div>
      </div>
      <div className="t-right">
        <img src={vector} alt="" />
        <img src={vector1} alt="" />
        <img src={screen} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glass}
          alt=""
        />
        <motion.div
          initial={{ left: "74%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "70%" }}
          className="floting-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2=" Developer"  />
        </motion.div>
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ left: "0", top: "18rem" }}
        >
          <FloatingDiv image={thump} txt1="Best Design" txt2=" Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      </div>
    </div>
  );
};
export default Tro;
