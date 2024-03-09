import React from "react";
import {faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Footer.css"

import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0 , scale : 1,filter :'blur(5px)'},
  visible: { opacity: 1 ,scale : 1,filter :'blur(0px)'},
}
const Footer = (props)=>{
  
return(
        <motion.div
        className ='Footer-container'
        initial = "hidden"
        variants = {variants}
        animate = "visible"
        >
        <div className="center">
        <div className="Footer">
        <a href="https://twitter"
        className="twitter social">
        <FontAwesomeIcon icon={faTwitter} 
       
        className = "fa-icon"
        color = "#000000"
        size="2x" />
      </a>
       <a href="https://www.linkedin.com/in/sakthi-ram-326b37224/"
        className="Linkedin social">
        <FontAwesomeIcon icon={faLinkedinIn} 
        className = "fa-icon"
        style = {{color : "black"}}
        size="2x" />
      </a>
   
      <a href="https://github.com/sakthiram17" 
      className="git social fa-icon">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      
      <a href="https://www.instagram.com/sakthi_ram_t/"
        className="instagram social fa-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
     
      </div>
      </div>
      </motion.div>
)


}
export default Footer;