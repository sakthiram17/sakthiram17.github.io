import React from 'react'
import { useEffect,useState } from 'react';

import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = (props)=>{
    const [width,getWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            getWidth(window.innerWidth)
            if(window.innerWidth>=600)
            {
                props.off()
            }
        })
      
    },
    [width])

    let is_small = width>900?false:true;
    let navList = [];
    let menuButton = null;
    if(!is_small)
    {
        for(var i = 0;i<props.list.length;i++)
        {   if(props.list[i]==props.active)
            {
                navList.push(<li onClick = {props.changePage }key = {i} className='NavbarElement Active'>{props.list[i]}</li>)
            }
            else{
                navList.push(<li onClick = {props.changePage }key = {i} className='NavbarElement'>{props.list[i]}</li>)
        }}
        navList.push( <a key = {20} className = 'NavbarElementAlt' href = "https://drive.google.com/file/d/1yPv0D5dKkuKGaDSimC37rX9ttBwAFKrk/view?usp=sharing">
        Resume <FontAwesomeIcon icon={faDownload} className = "fa-icon"
        />
       </a>)
    }
    else{
        menuButton = (<button className = "menu-button" key = {24} onClick = {props.expand}>

        {
            <FontAwesomeIcon icon = {faBars}></FontAwesomeIcon>
        }
        </button>
        )
    }
    const nav = (
        <div className='NavBar'>
        <div className= 'btn-grp'>
        {menuButton}
        </div>
        <div className = {!is_small?'navbar-header':'small_nav-header'}
        >
        <span className="header-f">{props.first}</span>
        <span className = "header-l">{props.last}</span>
        </div>
        <ul type = "none">
        {navList}
     
       
        </ul>
        </div>
    );
    return nav;


}
export default Navbar