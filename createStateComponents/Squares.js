import { useState } from "react"

function Squares() {

    const [state, setState] = useState(true);

    const styleDiv = {
        display: 'flex'
    }

    const styleBlSquare = {
        width: '300px',
        height: '300px',
        backgroundColor: 'blue',
        margin: '50px'
    }

    let styleOtherSquare = {
        width: '300px',
        heigth: '300px',
        backgroundColor: 'green',
        margin: '50px'
    }

    if (state === false) {
        styleOtherSquare.backgroundColor = 'red';
    } else {
        styleOtherSquare.backgroundColor = 'green';
    }

    return (
        <div style={styleDiv}>
            <div style={styleBlSquare}></div>
            <button style={styleOtherSquare}
                onClick={(e) => {
                    setState(state => !state, e);
                }}>
            </button>
        </div >
    )
}

export default Squares;