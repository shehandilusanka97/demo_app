
import { useState } from "react";
import Button from '@mui/material/Button';
import * as React from 'react';

function About(){
    // How to create a state
    const [name, setName]=useState('');
    const[address, setAddress]=useState('');

    const whenClicked=()=>{
        console.log(name+" "+address)
    }
    // useEffect(() => {
    //     console.log("useEffect Called")
    //  }, [name])


    return(
        <div>
        <br></br>
        Name :<input type={"text"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <br/>
        <br/>
        Address :<input type={"text"} value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
        <br/>
        <br/>
        <select>
            <option value={"Mazda"}>Mazda</option>
            <option value={"BMW"}>BMW</option>
            <option value={"Toyota"}>Toyota</option>
        </select>
        <br/>
        <br/>
        <Button variant="contained" onClick={whenClicked}>Save Data</Button>
        </div>
    )
}
export default About;