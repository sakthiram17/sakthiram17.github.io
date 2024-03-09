import "./scroll.css"
const ListElement = (props)=>{
    return (
        <div className="list-element">
            {props.content}
        </div>
        )
}
export default ListElement;