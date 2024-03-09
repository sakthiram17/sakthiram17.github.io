import logo from './logo.svg';
import Home from './Home/Home';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import SideBar from './SideBar/SideBar.jsx';
import Projects from './Projects/Projects.jsx';
import { useState,useEffect } from 'react';
import Resume from './Resume/Resume.jsx';
import Backdrop from './UI/Backdrop/Backdrop.jsx';
import Footer from './Footer/Footer.jsx';
import AviCard from './UI/AviCard.jsx';
function App() {
  let disabled = true;
  const toggled = false
  const particlesInit = async (main) => {
    console.log(main);

   
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const [sideon,setSideOn] = useState(false);
  const [currentPage,setCurrentPage] = useState("Home");
  const switchSideBar = ()=>{
  if(sideon)
  {
      disabled = true;
      setSideOn(false);
  }
  else{
   
      disabled = false;
      setSideOn(true);

  }}
  const offSideBar = ()=>
  { 
  
      disabled = true;
      setSideOn(false); 
  }
  const switchPages = (event)=>{

    setCurrentPage(event.target.innerHTML)
  }
  const changetoPassPage = (data)=>{
    setCurrentPage(data)
  }
  let page = null;
  switch(currentPage)
  {
    case "Home": page = <Home></Home>
    
    break;
    case "Projects":page = <Projects
    changePage = {changetoPassPage}
    ></Projects>
    break;
    case "About":page =  <Resume></Resume>;
    break;
   

  
  }
  
  

  return (
     <div className = 'app'>
    <Navbar header = "Sakthi Ram"
    first = "Sakthi"
    last = " Ram"
    list = {["Home","Projects", "About"]}
    disabled = {!sideon}
    active = {currentPage}
    changePage = {switchPages}
    off = {offSideBar}
    expand = {switchSideBar}></Navbar>
     <SideBar header = "Sakthi Ram"
     first = "Sakthi"
     last = " Ram"
    list = {["Home","Projects","About"]}
    disabled = {!sideon}
    changePage = {switchPages}
    active = {currentPage}
    close = {offSideBar}
     ></SideBar>
        {page}
        <AviCard></AviCard>
   
    <Backdrop off={offSideBar} shouldon = {sideon}></Backdrop>
   
    <Footer></Footer>
    </div>
  );
}

export default App;
