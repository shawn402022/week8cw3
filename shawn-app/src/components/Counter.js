import { useState, useEffect } from "react"


export default function Counter(props) {
    const [count, setCount] = useState(props.default || 0)
  
    /*
    * Define a prop of name, and display the counter's name 
    *in the jsx output, above the count instelf. If there is no name prop passed in,
    * set the name to defalut counter.
    */
    function increment(incrementor){
      setCount(count + incrementor)
    }


  
  
    return (
      <div className="Counter">
        <h2>{props.title || "default"}</h2>
          Count:{count}
          <button onClick ={()=> increment(1)}>Increment by 1 </button>
          <button onClick ={()=> increment(2)}>Increment by 2 </button>
          {
            //if condition//
            (count > 0) ?
            // output if condition is met (if)
            (
              <>
              <button onClick ={()=> increment(-1)}>Decrement by 1 </button> 
              <button onClick ={()=> increment(-2)}>Decrement by 2 </button>
              </>
            ):
            // output if condition is not met (else)
            <></>
          }
         
      </div>
    );
}