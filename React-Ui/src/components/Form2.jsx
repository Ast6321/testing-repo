import { useState } from "react";
import '../components/form.css'

function Productform(){

const [pform , setpform] = useState({

    name :"",
    price:"",
    description:"",
    category:""

})


const changefn = (e)=>{
  
    setpform({...pform,
        [e.target.name]: e.target.value
           
    })
}

const submitfn=(e)=>{
    e.preventDefault();
    console.log(pform)

  



    setpform({
    name :"",
    price:"",
    description:"",
    category:""
    })
}


return(

    <>
     
     <form onSubmit={submitfn}>
         <h1>product form</h1>
        <input type="text" name="name" placeholder="enter name" value={pform.name} onChange={changefn} required />
        <input type="number" name="price" placeholder="enter price" value={pform.price} onChange={changefn} required/>
        <textarea name="description" value={pform.description} onChange={changefn}></textarea>
         <select name="category" value={pform.category} onChange={changefn}>
            <option value="">select category</option>
            <option value="men">MEN</option>
            <option value="women">WOMEN</option>
            <option value="kids">KIDS</option>
         </select>
        
        <button type="submit">submit</button>
        
        </form>   
    


    
    </>
)



}


export default Productform