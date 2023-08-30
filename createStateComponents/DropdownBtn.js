import { useState } from "react";

function DropdowBtn(props) {

    const styleDiv = {
        marginBottom: '100px',
        marginLeft: '50px'
    }

    const styleLink = {
        textDecoration: 'none',
    }

    const ulStyle = {
        listStyleType: 'none',
        position: 'absolute'
    }

    const liStyle = {
        border: 'solid 1px black',
        width: '100px',
        height: '25px',
        marginTop: '5px'
    }

    let menu;
    const [state, setState] = useState(true);

    if (state == true) {
        menu = '';
    } else {
        menu = props.pointsOfMenu.map((item) => <li key={item} style={liStyle}><a style={styleLink} href={item.link}>{item.title}</a></li>)
    }

    return (
        <div style={styleDiv} >
            <button onClick={(e) => setState((state) => !state, e)}>
                {props.btnText}
            </button>
            <ul style={ulStyle}>
                {menu}
            </ul>
        </div>
    )
}

export default DropdowBtn;