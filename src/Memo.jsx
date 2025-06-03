import React, { useMemo, useState } from 'react'

const Memo = () => {

    const [a, seta] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        seta(a + 1);
    }

    const one = (num) => {
        console.log("yash");

        for (let i = 0; i < 1000000000; i++) {}

        return(num * num);
    }

    const number = useMemo(() => one(count),[count]) ;

  return (
    <>
    <p>{a}</p>
    <p>{number}</p>
    <input type="text" value={count} onChange={(e) => setCount(e.target.value)}/>
    <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Memo