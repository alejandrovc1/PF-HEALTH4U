import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteError } from "../../actions";

export default function Error(){
    let Error=useSelector(f=>f.error)
   const [error,setError]=React.useState(false)
const dispatch=useDispatch()
   useEffect(()=>{

       if(Error){
           setError(true)
           setTimeout(function(){
               console.log('entro')
               setError(false)
               dispatch(deleteError())
            },5000)
            
            console.log(error)
        }
    },[Error])
    return(
        <>
       {error?<span>{Error}</span>:null}
        </>
    )
}