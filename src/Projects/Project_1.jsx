import "./Projects.css" 
import img1 from "./p1/1.jpg"
import img2 from "./p1/2.jpg"
import img3 from "./p1/3.jpg"
const Project_1 = (props) =>{

return(
    <div className = 'pcard'>
        <div className = 'p-header'>{props.header}</div>
        <div className = 'p-image'><img src = {img1}>
            </img></div>
        <div className = 'p-para'>{props.para1}</div>
        <div className = 'p-image'><img src = {img2}>
            </img></div>
        <div className = 'p-para'>{props.para2}</div>
        <div className = 'p-image'><img src = {img3}>
            </img></div>
        <div className = 'p-para'>{props.para3}</div>
    </div>
)

}
export default Project_1;