import { useState } from 'react';
function Counter(){
    return(
         [count, setCount] = useState(0);

        <div>
<p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;