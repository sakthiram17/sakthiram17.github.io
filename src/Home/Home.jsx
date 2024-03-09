import React from "react";
import "./Home.css"
import Typewriter from "typewriter-effect";
import ProgressBar from "./ProgressBar.jsx";
import { motion } from "framer-motion";


const variants = {
    hidden: { opacity: 0 , scale : 0.5,filter :'blur(5px)'},
    visible: { opacity: 1 ,scale : 1,filter :'blur(0px)'},
  }
const variants2 = {
    hidden: { opacity: 0 , scale : 0.5,filter :'blur(5px)'},
    visible: { opacity: 1 ,scale : 1,filter :'blur(0px)'},
}



const Main = ()=>{
 
    return  <motion.div   
      initial="hidden"
      animate= "visible"
      variants={variants2}
     transition={{ delay: 0.083 }}
     className="main-container"
   
     
    
       >
    <div className="Main">
    <div className = "first-section">
    <div className="SText"><span className = 'text-shadow'>I am a</span>
    <Typewriter
         options={{
            strings: ['Web Developer', 'Electrical Engineer','Tech Enthusiast'],
            autoStart: true,
            loop: true,
          }}
        />
    </div>
    </div>
    
    </div>
      </motion.div>





}

const Skills =()=>{

  return  <motion.div   
    initial="hidden"
    animate= "visible"
    variants={variants2}
    className="skills-container"
    transition={{ delay: 0.083 }}
     
    
     >
       
        <div className="Skills">
            <h1 className = "header" style = {{textAlign : "center"}}>My Skills</h1>
           
            <div className = "badge">
              &#9733;
            </div>
            <div className = "badge-bottom">
            </div>
            
            <span unselectable="on">
                <li unselectable="on" className = 'i-batch'>
                  <p>Hardware- Software Integration </p>
                 
                </li>
            
                
                <h2 unselectable="on">
                   Built Xelerate hub which allows remote control and monitoring of Novel Patent High Gain DC-DC converter whose control is enabled
                   by combination of websocket,UART,Control Systems, Power electronics and Software Engineering.
              
                  </h2>
                  </span>

            <ul type = "none" unselectable="on">
              
                <span unselectable="on">
                <li unselectable="on" className = 'i-batch'>MERN Stack</li>
                <h2 unselectable="on" >Built FullStack webApp PlacesExplorer and Xelerate-hub and also developed
                  several front-end web applications such as typingspeedtest app, gradeWise with ReactJs
              
                </h2>
                </span>
                <li className = 'i-batch'>Verilog</li>
                <span unselectable="on">
                <h2 unselectable="on">Smart Delivery Bot,Smart Access Control with FPGA
                  Presented in SCGPS Conference
                </h2>
                </span>
                <span unselectable="on">
                <li unselectable="on" className = 'i-batch'>C,C++,Java</li>
                <h2>proificient in C,C++,Java Built Projects using
                  Embedded C, javaFx 
                
                </h2>
                </span>
                <span unselectable="on">
                <li unselectable="on" className = 'i-batch'>MATLAB</li>
                <h2 unselectable="on">Finite Element Analysis, Numerical Solution with MATLAB
                  and Power Converter simulation with Simulink
               
                </h2>
                </span>
                <span unselectable="on">
                <li unselectable="on" className = 'i-batch'>
                  PEC Design
                </li>
                <h2 unselectable="on">
                  
                  designed,Fabricated ,tested and Published patents for Three novel High Gain DC-DC converters for PV applications with
                  STM32 Based Closed Loop Control
            
                  </h2>
                  </span>

            </ul>
            
        </div>
    </motion.div>
}


const Home = ()=>{

return(
    <div className="Home">
    <motion.div   
    initial="hidden"
    animate="visible"
    variants={variants}
     transition={{ delay: 0.05 }}
     className="home-container"
     >
   
    </motion.div>
    <Main></Main>
    <Skills></Skills>
   
  
  
    </div>
)



}
export default Home