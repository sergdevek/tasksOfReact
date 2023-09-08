import { useState } from "react";

function Slider({ slider }) {

    let divStyle = {
        display: 'flex',
        margin: '200px 300px 300px 300px'
    }

    let btnStyle = {
        width: '100px',
        height: '400px'
    }

    function plusCnage(num, nextNum, cnst) {
        if (num < slider.length) {
            nextNum(num + 1, cnst)
        }
        if (num == (slider.length - 1)) {
            nextNum(num - (slider.length - 1), cnst)
        }
    }

    function minusCnage(num, nextNum, cnst) {
        if (num > 0) {
            nextNum(num - 1, cnst)
        }
        if (num == 0) {
            nextNum(num + slider.length - 1, cnst)
        }
    }

    const [currentImg, setCurrentImg] = useState(0);

    let img = slider[currentImg].img;
    let text = slider[currentImg].text;

    return (
        <div style={divStyle}>
            <button style={btnStyle} onClick={(e) => { minusCnage(currentImg, setCurrentImg, e) }}>previos</button>
            <img src={img} alt={text} style={{ width: '800px', height: '400px' }} />
            <button style={btnStyle} onClick={(e) => plusCnage(currentImg, setCurrentImg, e)}>next</button>
        </div>
    )
}

export default Slider;