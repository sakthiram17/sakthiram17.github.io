import { motion } from "framer-motion";
import Avatar from "./UI/AviCard";
import dp from "./Images/avi.jpg"
const AboutMe = (props)=>{
    const variants2 = {
        hidden: { opacity: 0 , scale : 0.5,filter :'blur(5px)'},
        visible: { opacity: 1 ,scale : 1,filter :'blur(0px)'},
    }
    
    return(
        <div>
         <motion.div   
      initial="hidden"
      animate = "visible"
      variants={variants2}
      className="about-container"
      transition={{ delay: 0.083 }}
       >
        <div className = "About">
        <div className="about-top">
            <Avatar
        image = {dp}
        height = "100px"
        width = "100px"
        ></Avatar>
        <h2 className="header">T Sakthi Ram</h2>
        <div className = "badge">
        </div>
        
        </div>
  
        <p className = 'about-content'>
            I am a 3rd Year Electrical Engineering Student at VIT Chennai.
            My area of interest is Power Electronics and I have developed three Novel
            Topoglies for High Gain DC-DC converters which enable integration of
            Low Voltage PV Panels straight into DC Grid without transformers reducing the number of stage,size
            and cost.I am also a full stack web developer with keen interest in exploring
            new techonlogies. I have developed several web applications over the years with technologies 
            ranging from HTML,CSS, Js to ReactJs.My web App Projects include typing speed test app which
            allows the user to improve their typing performance with custom size pratice test. GPA caculator a simple
            web app that allows VITians to caculate the GPA,CGPA and FAT passing marks and it also acts as a launchpad for me to test
            new UI ideas.PlacesExplorer is the most technical software project i have build sofar.
            Coming from a EEE background i have acquired skills related to VLSI design that is FPGA and ASIC design
            from college curricullum and i have implemented verilog in realising logic to solve real world problems through
            smart Delivery bot and smart Access control and presented the same in the SGCPS conference 2023.
            Currently Exploring Smart Embedded Control for Power Converters designed for net-zero emissions.
        </p>
        
        </div>
        
      </motion.div>

        </div>
        
        )


}
export default AboutMe;