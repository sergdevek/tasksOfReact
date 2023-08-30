import { useState } from "react";

function Counter() {

    function compare(num) {
        return (num < 10) ? 'number less ten' :
            (num > 10) ? 'number greater than ten' :
                "the number is ten";
    }

    const [count, setCount] = useState(0);
    const [countThird, setcountThird] = useState(0);
    const [countFourth, setcountFourth] = useState(0);

    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={(e) => setCount(count + 1, e)}>increase by one</button>
                <p>{compare(count)}</p>
            </div>
            <br />
            <div>
                <p>next step</p>
                <p>{countThird}</p>
                <button onClick={(e) => setcountThird(countThird + 1, e)}>increase by one</button>
                <span> / </span>
                <button onClick={(e) => setcountThird(countThird - 1, e)}>decrease by one</button>
            </div>
            <br />
            <div>
                <p>next step</p>
                <p>{countFourth}</p>
                <button onClick={(e) => setcountFourth(countFourth + 1, e)}>increase by one</button>
                <span> / </span>
                <button onClick={(e) => setcountFourth(countFourth + 5, e)}>increase by five</button>
                <span> / </span>
                <button onClick={(e) => setcountFourth(countFourth + 10, e)}>increase by ten</button>
                <span> / </span>
                <button onClick={(e) => setcountFourth(countFourth * countFourth, e)}>multiply</button>
                <span> / </span>
                <button onClick={(e) => setcountFourth(countFourth - countFourth, e)}>reset</button>
            </div>
        </>
    )
}

export default Counter; 