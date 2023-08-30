import { useState } from "react";

function LimitInput(props) {

    const [count, setCount] = useState('');
    var inputTextValue;
    window.onkeyup = keyup;

    function keyup(e) {
        inputTextValue = e.target.value;
        if (inputTextValue.length < props.min) {
            setCount('Вам нужно ввести минимум ' + props.min + ' символа');
        } else if (inputTextValue.length > props.max) {
            setCount('Вам нужно ввести максисмум ' + props.max + ' символа');
        } else if (props.min <= inputTextValue.length <= props.max) {
            setCount('');
        }
    }

    return (
        <div style={{ margin: '50px' }}>
            <input type="text"></input>
            <p style={{ color: 'red' }}>{count}</p>
        </div>
    )
}

export default LimitInput;