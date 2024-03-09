import React from "react";
import ListElement from "./ListElement";
import "./scroll.css"
const UniversalScrollList = (props)=>{
    let list = props.list;
    let content = list.map(ele=>{
        return <ListElement content = {ele}> {ele}</ListElement>
    })
    return <div className = "universal-scroll-List">{content}</div>;

}
export default UniversalScrollList;