import Lable from "./Lable"
function Detail(props){
    
    return(
        <div>
            <Lable name="Name" value= {props.student.name}/>
            <Lable name="Age" value={props.student.age}/>
            <Lable name="Address" value={props.student.address}/>
            <Lable name="T.P." value={props.student.tp}/>
        </div>
    )
}
export default Detail