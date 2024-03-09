import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(5px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

const Resume = (props) => {
  return (
    <React.Fragment>
  
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <div className="Resume">
          <h1>SAKTHI RAM</h1>
          <p>
            Address: Chennai, Tamil Nadu
            <br />
            DOB: 01/02/2002
            <br />
            Mobile: 9790372479
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/sakthi-ram-326b37224/">
              https://www.linkedin.com/in/sakthi-ram-326b37224/
            </a>
            <br />
            Portfolio:{" "}
            <a href="https://sakthiram17.github.io/">
              https://sakthiram17.github.io/
            </a>
            <br />
            Github Profile:{" "}
            <a href="https://github.com/sakthiram17">
              https://github.com/sakthiram17
            </a>
            <br />
            Email: sakthiram1717@gmail.com
          </p>

          <h2>Summary</h2>
          <p>
            I am a Final year Electrical Engineering student at VIT Chennai,
            deeply passionate about Power Electronics. I've pioneered three
            innovative topologies for high-gain DC-DC converters, facilitating
            the direct integration of low-voltage PV panels into DC grids
            without transformers, thereby reducing stages, size, and costs.
            Concurrently, my proficiency as a full-stack web developer
            encompasses projects like a typing speed test app and a GPA
            calculator, showcasing my versatility in technologies ranging from
            HTML, CSS, and JavaScript to ReactJs. I have continued to excel
            academically, maintaining a remarkable CGPA of 9.36. In addition to
            my academic achievements, I've undertaken significant projects,
            including the development of a Cubic DC-DC Boost Converter with
            real-time control and monitoring, and Magnetrix-io, an automated
            high-frequency inductor design platform built with React Js. My
            commitment to innovation extends to recent projects like the Novel
            Quartic Boost Converter and the Novel Single Switch Cubic Boost
            Converter for PV applications. Furthermore, my accolades include
            being GATE 2023 Qualified with a rank of 3897 and a score of 361, as
            well as meritorious scholarships. I've secured top rankings at VIT,
            including 7th at the end of the academic year 2021-22 and 5th at the
            end of the 5th semester. Notably, I've clinched the 1st place in
            various categories at the Open house project Competition at VITCC
            for projects related to high-gain DC-DC converters and smart grids.
            In the realm of publications, I've patented three boost converter
            designs, and I've presented papers on FPGA-based smart delivery bots
            and smart building access control at the SGCPS Conference 2023.
            Currently, my focus is on Smart Embedded Control for Power
            Converters designed to contribute to a net-zero emissions future.
            Eager to bring my diverse skill set, encompassing power electronics,
            VLSI design, and web development, to a role that values innovation
            and problem-solving.
          </p>

          <h2>AWARDS</h2>
          <ul>
            <li>GATE 2023 Qualified - Rank: 3897, Score: 361</li>
            <li>Meritorious scholarship - VIT</li>
            <li>Ranked 7th at the end of the academic year 2021-22 - VIT</li>
          </ul>

          <h2>PUBLICATIONS</h2>
          <ul>
            <li>
              Published a patent for a novel quartic boost converter with IBC
              and Floating capacitors (Application no: 202341026491)
            </li>
            <li>
              Patent published for novel RS-C3BC based cubic boost converter
              (application no: 202341081042)
            </li>
            <li>
              Patent published for Novel boost converter with quintic voltage
              gain (Application no: 202341063999)
            </li>
          </ul>

          <h2>SKILLS</h2>
          <ul>
            <li>
              Power Converter Design: PCB Design, High-Frequency
              Inductor/Transformer Design, Soldering, Testing, and
              Troubleshooting
            </li>
            <li>
              Circuit Simulation Tools: LTSpice, MATLAB Simulink, Proteus, PSCAD
            </li>
            <li>Microcontrollers: STM32, Arduino, ESP8266, and 8051</li>
            <li>Digital Design: Verilog, RTL design, FSM, Cadence Virtuoso</li>
            <li>Programming Languages: Java, C/C++, Python, Embedded C</li>
            <li>Web Development: ReactJs, MERN Stack, Node js, Bootstrap</li>
            <li>Databases: MySQL, MongoDB, Firebase</li>
          </ul>

          <h2>CERTIFICATIONS</h2>
          <ul>
            <li>Data Structures and Algorithms Self Paced - GeeksForGeeks</li>
            <li>Data Analytics with Python - Nptel</li>
            <li>
              Mastering Data Structures & Algorithms using C and C++ - Udemy
            </li>
            <li>
              Basic Proficiency in Problem-solving, Javascript, Java, and Python
              - Hackerrank
            </li>
            <li>React Complete Course Udemy</li>
            <li>Front-End UI Frameworks Coursera</li>
            <li>VLSI Design Metholodgies Maven Silicon</li>
          </ul>

          <h2>EDUCATION</h2>
          <ul>
            <li>
              Vellore Institute of Technology Chennai - BTECH Electrical and
              Electronics Engineering (July 2020 — Present) - CGPA: 9.36
            </li>
            <li>
              Maharishi International Residential School - 12th Std, CBSE (July
              2019 — May 2020) - 94%
            </li>
          </ul>

          <h2>WORK EXPERIENCE</h2>
          <ul>
            <li>
              Intern - Maven Silicon Softech Pvt Ltd. - Designed an SPI master
              core using Verilog (Jun 2023 — Aug 2023)
            </li>
            <li>
              Research Intern - VIT Chennai Power Electronics - Developed three
              novel high-gain DC-DC boost converters (Sep 2022 — Feb 2023)
            </li>
            <li>
              FPGA Intern - VITCC - Presented FPGA-driven Smart Delivery Bot
              research at two conferences (Jun 2022 — Aug 2022)
            </li>
            <li>
              R&D Intern - Valeo - Contributed to Automotive Headlamp Prototype
              Testing (Jun 2022 — Jul 2022)
            </li>
          </ul>

          <h2>PROJECTS</h2>
          <ul>
            <li>
              <strong>
                Cubic DC-DC Boost Converter: Real-Time Control and Monitoring
                with XLR8-Hub
              </strong>
              <br />
              Dec-2023 – Jan 2023
              <br />
              <strong>Xelerate Hub (FrontEnd):</strong> Utilized ReactJS and
              ReCharts for real-time data visualization and control. Achieved
              resolutions down to 10ms with advanced outlier detection. Dynamic
              control panel for parameter adjustments.
              <br />
              <strong>
                Backend (Express Server and Websocket Server):
              </strong>{" "}
              Express server managing communication between FrontEnd and STM32.
              Websocket server for efficient data dispatch. Serial monitor
              parser for real-time data transmission. Also handles HTTP request
              from the front-end to change parameters and resolution.
              <br />
              <strong>STM32 Microcontroller:</strong> Generates PWM signals for
              RS-CBC in four modes, including open loop and closed loop.
              Real-time parameter adjustments from FrontEnd. ADC readings for
              continuous monitoring of output voltage and current.
              <br />
              <strong>Power Converter (RS-C3BC):</strong> (16-32V) input, 400V
              200W output. Exceptional gain-to-component ratio. Reduced current
              stress on inductors. Voltage Amplification of 22 at duty ratio of
              0.5.
              <p className="skills-resume">
                <strong>Skills Used:</strong> ReactJS, ReCharts, Express,
                Websockets, STM32, Power Electronics
              </p>
            </li>

            <li>
              <strong>Magnetrix-io</strong>
              <br />
              Ongoing
              <br />
              Automates high-frequency inductor design built with ReactJS.
              Project saving in Firebase. User authentication for secure access.
              Profile card with design stats and history.
            </li>

            <li>
              <strong>Nand2Hack</strong>
              <br />
              Oct 2022 — Dec 2022
              <br />
              Constructed a hack computer using NAND gates and HDL. Custom
              architecture with simple instructions. Built as part of a
              project-oriented course.
            </li>

            <li>
              <strong>
                Novel Quartic Boost Converter with IBC and Floating capacitor
                cells for PV applications
              </strong>
              <br />
              Sep 2022 — Jan 2023
              <br />
              Novel Floating capacitor based cubic cell with reduced diode and
              capacitor stress. Integrated smart web dashboard using ReactJS and
              esp8266 to log the data to Firebase. Achieved excellent line and
              load regulation with closed-loop control using STM32. Fabricated
              and tested 16V-400V, 150W hardware prototype.
            </li>

            <li>
              <strong>
                Novel Single switch cubic boost converter with LCL for PV
                applications
              </strong>
              <br />
              Jan 2023 — May 2023
              <br />
              Novel high-step up single-switch cubic boost converter. Achieved
              excellent line/load regulation and 94% peak efficiency.
            </li>

            <li>
              <strong>PlacesExplorer</strong>
              <br />
              Ongoing
              <br />
              Full-stack MERN web app for sharing travel pictures. Utilized Open
              Maps API for address-to-coordinates conversion. Enabled
              interactive exploration of user-shared locations.
            </li>

            <li>
              <strong>GradeWise</strong>
              <br />
              Ongoing
              <br />
              ReactJS web app for GPA calculation and tracking. Modern UI with
              animations, intuitive user experience.
            </li>

            <li>
              <strong>Smart Delivery Bot</strong>
              <br />
              Jun 2022 — Aug 2022
              <br />
              FPGA-based project for temperature sensor data processing. Used
              Dijkstra's algorithm for shortest path calculation.
            </li>

            <li>
              <strong>Smart Building Access Control</strong>
              <br />
              Jun 2022 — Aug 2022
              <br />
              Implemented Simple FSM using shift registers. Enabled user
              authentication with a passcode.
            </li>
          </ul>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default Resume;
