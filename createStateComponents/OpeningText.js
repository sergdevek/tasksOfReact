import { useState } from "react";

function OpeningText(props) {

    const styleDiv = {
        marginBottom: '50px',
        marginLeft: '50px'
    }

    let butStyle = {
        width: '150px',
        height: '50px'
    }

    let sentenses = props.paragraph.split('.');
    const [state, setState] = useState(true);

    let text;
    let butText;

    if (state == true) {
        text = sentenses[0] + '.';
        butText = 'show all text';
    } else {
        text = sentenses.join('. ');
        butText = 'show only first sentens';
    }

    return (
        <div style={styleDiv}>
            <p>
                {text}
            </p>
            <button style={butStyle}
                onClick={(e) => setState(state => !state, e)}>
                {butText}
            </button>
        </div>
    )
}

export default OpeningText;