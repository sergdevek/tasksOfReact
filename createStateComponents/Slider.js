import { useState } from "react";

function Slider(props) {

    let divStyle = {
        display: 'flex'
    }

    let butStyle = {
        width: '100px',
        height: '400px'
    }

    let pStyle = {
        width: '400px',
        height: '400px',
        border: 'solid 2px black',
        textAlign: 'center'
    }

    let sliderList = {};
    const iterator = props.slider.keys();

    for (const key of iterator) {
        sliderList[key] = props.slider[key];
    }

    function plusCnage(num, nextNum, cnst) {
        if (num < props.slider.length - 1) {
            nextNum(num + 1, cnst)
        }
    }
    function minusCnage(num, nextNum, cnst) {
        if (num > 0) {
            nextNum(num - 1, cnst)
        }
    }

    const [currentImg, setCurrentImg] = useState(0);

    return (
        <div style={divStyle}>
            <button style={butStyle} onClick={(e) => { minusCnage(currentImg, setCurrentImg, e) }}>previos</button>
            <p style={pStyle}>
                <img scr={sliderList[currentImg]} alt=""></img>
                {sliderList[currentImg]}
            </p>
            <button style={butStyle} onClick={(e) => plusCnage(currentImg, setCurrentImg, e)}>next</button>
        </div>
    )
}

export default Slider;