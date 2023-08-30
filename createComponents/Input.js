import { useState } from "react";

function Input(props) {

    const [inputValue, setInputValue] = useState(props.inputValue);

    if (props.placeholder == ! "") {
        return (
            <div className="mb-3">
                <label htmlFor={props.inputType}>{props.inputText}</label>
                <input type={props.inputType} className="form-control" id={props.inputType} placeholder={props.placeholder} name={props.inputType} />
            </div>
        )
    }

    return (
        <div className="mb-3">
            <label htmlFor={props.inputType}>{props.inputText}</label>
            <input type={props.inputType} className="form-control" id={props.inputType} value={inputValue} name={props.inputType} onChange={e => setInputValue(e.target.value)} />
        </div>
    )
}

export default Input;