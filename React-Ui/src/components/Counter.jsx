import '../components/Counter.css';
import { useEffect, useState } from 'react';

function Counter(){

    const [count , updateCount] = useState(0);
    const [showtext , updateshowtext] = useState(false);
  
    function next(){
        updateCount(count+1);
       updateshowtext(true);

    };

    useEffect(()=>{
        if(showtext){
        const timer = setTimeout(()=>{
           updateshowtext(false)
        },1000);

        return ()=> clearTimeout(timer);
    }
    },[count])
  
    function prev(){
        updateCount(count-1);
    };

    return(

        <>
        <div className='ramheading'>{showtext&& "राम"}</div>
        <div className="maindiv">
           <div>{count}</div>
           <div>
            <button onClick={next}>+</button>
            <button onClick={prev}>-</button>
           </div>

        </div>
        
        
        
        </>
    )


}

export default Counter