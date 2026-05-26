import { useState } from "react"
import '../components/form.css'

function Form(){
const [form , setform] = useState({email:"",password:""})

const changefn = (e)=>{
     setform({...form , [e.target.name]:e.target.value}) ;  
    
}

const submitfn = (e)=>{
    e.preventDefault();
    console.log(form);

    setform({email:"",password:""});
}



    return(
        <>
      <form onSubmit={submitfn}>
        <h1>register form</h1>

        <input type="email" placeholder="enter name" name="email" value={form.email} onChange={changefn} />
        <input type="password" name="password" placeholder="enter password" value={form.password} onChange={changefn}/>
        <button type="submit">submit</button>



      </form>

     
        
        </>
    )
}



export default Form

