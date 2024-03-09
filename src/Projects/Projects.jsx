import React from "react";
import "./Projects.css";
import Home from "../Home/Home";
import Card from "../UI/Card/Card";
import typseed from "./tspeed.png";
import gpa from "./gpa.png";
import waste from "./waste.png";
import esp from "./esp.png";
import places from "./places.jpg";
import goal from "./goal.jpg";
import { XyzTransitionGroup } from "@animxyz/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import UniversalScrollList from "../UI/UniversalScrollList/UniversalScrollList";
import Project_1 from "./Project_1";
import cubic_ibc from "../Images/cubic_ibc.jpg";
import Quintic from "../Images/quintic.jpeg";
import xlr8 from "../Images/xlr8.png"
import evcubic from "../Images/evcubic.jpeg";
import mag from "../Images/mag.png"
const variants = {
  hidden: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};


let list = [
  <Card
  text="Typing speed test app built using ReactJs "
  link="https://github.com/sakthiram17/xlr8-hub-websocket/"
  header="Cubic DC-DC Boost Converter: Real-Time Control and 
  Monitoring with XLR8-Hub"
  pos={0}
  para={` 
  Xelerate Hub stands as a testament to my proficiency in both front-end and back-end development. Leveraging ReactJS and ReCharts, the front-end delivers real-time data visualization and control with an impressive resolution of 10ms and advanced outlier detection. The dynamic control panel allows seamless parameter adjustments. On the back-end, an Express server facilitates communication between the front-end and the STM32 microcontroller, managed through a WebSocket server for efficient data dispatch. A serial monitor parser ensures real-time data transmission, handling HTTP requests from the front-end to modify parameters and resolution. The STM32 microcontroller plays a pivotal role, generating PWM signals for an RS-CBC in various modes, facilitating open and closed-loop configurations. The RS-C3BC power converter, with a 14V-32V input and 400V 150W output, boasts an exceptional gain-to-component ratio, reducing current stress on inductors while achieving efficient voltage amplification.
  `}
  imgsrc={xlr8}
></Card>,
 <Card
 text="Typing speed test app built using ReactJs "
 link="https://github.com/sakthiram17/magnetrix-io/"
 header="Magnetrix -React App to Simplify Inductor Design"
 pos={0}
 para={` 
 Magnetrix.io stands out as an innovative project, seamlessly harmonizing hardware and software components to revolutionize high-frequency inductor design. Through its robust features, the platform offers a streamlined experience by automating complex inductor design processes. Notably, Magnetrix.io employs Firebase integration for secure project saving and organization, empowering users with a reliable and efficient solution. The emphasis on user authentication ensures a confidential design experience, prioritizing security throughout. Additionally, the platform introduces a personalized touch with Profile Cards, providing insightful design statistics and a comprehensive project history. Powered by React.js, Magnetrix.io represents a significant leap forward in making high-frequency inductor design accessible, secure, and user-friendly.
 `}
 imgsrc={mag}
></Card>,

  <Card
    text="Typing speed test app built using ReactJs "
    link="https://github.com/sakthiram17/typingspeedtest2"
    header="TypingSpeedTest App"
    pos={0}
    para={`TypingSpeed Test is a Simple yet powerful FrontEnd web application with ReactJs that allows to take
    custom length speed tests according to your needs and it provides vital statistics such as CPM,WPM, Accuracy
    etc to help analyse your typing skills and practice to strive to being one of the best typists`}
    imgsrc={typseed}
  ></Card>,
  <Card
    text="Simple Gpa Calculator app made using React"
    header="GPA Calculator"
    imgsrc={gpa}
    para={`
    GPA caculator a simple web app that allows VITians to caculate the GPA,CGPA and FAT passing marks 
and it also acts as a launchpad for me to test new UI ideas . 
 GPA calculator website is a great tool for students looking to calculate their GPA quickly and accurately. 
The design is simple and easy to navigate, with a clean interface that makes it easy to input and calculate grades. 
The calculator is accurate and provides correct GPA calculations based on the input fields
    `}
    pos={1}
  ></Card>,
  <Card
    text="Waste Segregator with IoT based level monitoring "
    link="https://github.com/sakthiram17/WasteSegregator"
    header="Smart Waste Segregator"
    imgsrc={waste}
    pos={0}
    para={`
    It is Project that combines both software and embedded systems to solve
   
     Automate Segregation of the waste into three bins i.e. dry and wet waste.
    We have achieved this with the use of soil moisture sensor which senses 
    the wetness of the waste and digital capactive senor which senses the 
    presence of waste and two servo motors which aids us in making the 
    mechanism to put the waste in correct bin according its characteristiscs 
    all these sensors are controlled by Arduino Uno
     Indicate the Filled Capacity in each bin using IOT and APP.
    We have used Esp8266 IoT module and ultrasonic distance sensors to 
    achieve this purpose. The ultrasonic distance sensors give the amount of 
    space filled in each bin which is then uploaded to a cloud database 
    known as firebase with the help of ESP module. The data from the cloud 
    database can be accessed through our Custom made web app`}
  ></Card>,

  <Card
    text=" SPA built on MERN stack which enables users to share places they vist and view the places posted by others"
    link="https://github.com/sakthiram17/places_fullstack/tree/master"
    header="Places Explorer"
    imgsrc={places}
    pos={1}
    para={`Places Explorter is a full stack web application that is beyond the the cutting edge
    MERN stack. It allows users to post the pictures of a public places they have travelled to
    and the app automatically converts the address to a point in map allowing the other users of the platform
    to  not only look at the places other have visited but also easily navigate to that place using maps. The users
    are uniquely indentified by their mail ids and data security is ensured by using cryptJs for generating tokens to verify
    password.`}
  ></Card>,
  <Card
    text=" "
    header="Novel Boost Converter with Floating Capacitor based cubic cell and IBC"
    imgsrc={cubic_ibc}
    pos={0}
    para={`Integration of low power PV panels into the standard high voltage dc-dc grids is 
      challenging as the voltage gain of a conventional boost converter is limited to 
      about 5 because of reverse recovery issues of switches and diodes especially at 
      high frequencies at high duty ratios. This novel converter consists of novel cubic 
      boost converter which is synthesised by cascading a Interleaved boost 
      converter with voltage lift along a floating capacitor/ reduced energy based 
      Cubic boost converter. The issue with floating capacitor based gain boost 
      converters is that the input current is discontinuous but this is overcome in our 
      converter by using them in the second stage and using a IBC as the first stage . 
      The interleaved boost converter involves two Boost converter operating at a 
      180 degree phase difference i.e while L1 is charging,L2 would be discharging so 
      the ripples cancel each other which enables us to get really low input current 
      ripple without needing bulky inductors.
      This Conveter Achieves a voltage gain of 25 from 16V to 400V at a very low duty ratio of 0.46. And this coupled with great efficiency
      and quartic gain scaling the converter's gain is only limited by the current stress of Components rather than the duty ratio.
      It uses only twenty components to achieve the said gain.
      
      `}
  ></Card>,
  <Card
    text=" "
    header="Novel Quintic Boost Converter"
    imgsrc={Quintic}
    pos={1}
    para={`High gain dc-dc converters play a major role in allowing PV panels or fuel cells with the standard dc grid or high voltage dc loads. In a conventional boost converter to achieve high gains the duty ratio needs to high but due to the effect of reverse recovery issues of diodes and switches at those duty cycles the maximum duty cycle achievable is limited. To increase gain our converter uses a CBC cascaded with a novel single switch quartic cell which has quartic which gives our converter overall quintic gain. This allows us to achieve a gain of 33.33 for 12v input to 400 DC bus at a very safe duty cycle of 0.5 and 0.52. This converter is tested for 400V/100W output and also it has higher gains compared to other proposed solutions.
        
        `}
  ></Card>,

  <Card
    text=" "
    header=" Novel High gain dc-dc cubic boost converter with bridge capacitance based gain extension and switched inductors"
    imgsrc={evcubic}
    pos={0}
    para={`
      A single switch high gain dc-dc converter with cubic boost gain with novel bridge capacitor based gain extension mechanism which is more efficient and has reduced number of components with high gain to component ratio and it is also embedded with switched inductor network to achieve one of highest voltage gains in single switch topology. 175W prototype which integrates 18V PV panel into 400V standard dc grid is designed and verified through simulation results with MATLAB Simulink software. With only 18 component this proposed converter can achieve a voltage gain of 24 at 0.5 duty which enables this proposed converter achieve one of the highest gain to component ratio.
      `}
  ></Card>,
];
const Project = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      ref={ref}
      className="inline-block"
      onClick={() => {
        props.changePage("Project-1");
      }}
    >
      {props.ele}
    </motion.div>
  );
};

let inital_value = [false, false, false, false, false, false];
const Projects = (props) => {
  let content = [];

  for (let i = 0; i < list.length; i++) {
    content.push(<Project ele={list[i]} key={i}></Project>);
  }

  return <div className="Projects">{content}</div>;
};
export default Projects;
