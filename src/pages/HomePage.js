 import Detail from "../Components/Detail";
function HomePage(){

    const students=[{
        id:1,
        name: "Shehan",
        age: 24,
        address: "Gampaha",
        tp: "0787286230"
    },
    {
        id:2,
        name: "ck",
        age: 25,
        address: "Veyangoda",
        tp: "0787286231"
    },
    {
        id:3,
        name: "Evumi",
        age: 22,
        address: "Moratuwa",
        tp: "0787286232"
    },{
        id:4,
        name: "Kasun",
        age: 43,
        address: "Galle",
        tp: "0787286233"
    }]


    return(
        <div>
        
            <p> This is Home Page</p>
            <hr />
            <h1 className='lable'>Student Details</h1>
            {
                students.map (student =>{
                    return(
                        <div key={students.id}>
                            <Detail student={student}/>
                            <br/>
                        </div>
                    )
                }) 
            }
            
        </div>
    )
}
export default HomePage;