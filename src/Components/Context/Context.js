import { createContext, useState } from "react";

export const myContext=createContext()

const intialData={
    firstname:"",
    lastName:"",
    Department:"",
    date:"",
    Designation:"",
    salary:"",
    img:""
}

 export const ContextProvider=({children})=>{

const [empoydata, setempoydata] = useState(intialData)
const [data, setdata] = useState([])
const [popup, setpopup] = useState(false)
console.log(empoydata);
    return(
        <myContext.Provider  value={{empoydata,setempoydata,intialData,data,setdata,setpopup,popup}}>
{children}
        </myContext.Provider>
    )
}

