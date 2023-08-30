import { useState } from "react";

function TextReplacer() {

    const generalStyle = {
        margin: '20px',
        width: '400px',
        fontSize: '20px',
        border: 'solid 1px red'
    }

    const style = {
        margin: '20px',
        border: 'solid 1px black'
    }

    const [butState, setButState] = useState({ visibility: 'hidden' });
    const [pState, setPState] = useState();

    return (
        <div style={generalStyle}>
            <button onClick={(e) => setButState({ visibility: 'visible' }, setPState({ visibility: 'hidden' }), e)}>
                <span style={butState}>butText is opened</span>
            </button>
            <button onClick={(e) => setButState({ visibility: 'hidden' }, setPState({ visibility: 'visible' }), e)}>
                <span>close butText</span>
            </button>
            <p style={style}>
                <span style={pState}>Добавить кнопку и параграф с текстом, по умолчанию на кнопке текст "Скрыть" и блок с текстом виден.
                    Когда мы нажимаем на кнопку, текст меняется на "Показать" и текст ниже пропадает.</span>
            </p>
        </div>
    )
}

export default TextReplacer;