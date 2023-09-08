import { useState } from "react";

function ToDoList() {

    const [value, setValue] = useState([]);
    const [check, setCheck] = useState([]);

    function addValue() {
        const input = document.getElementById('titleInput').value;
        setValue([...value, input]);
        document.getElementById('titleInput').value = '';
    }

    function deleteByIndex(index) {
        setValue([...value.slice(0, index), ...value.slice(index + 1)])
    }

    function toChange(event, index) {
        if (event.target.checked) {
            setCheck({ ...check, [index]: true });
            // console.log('index: ' + index + ' - ' + '✅ Check in box is checked');
        } else {
            // console.log('index: ' + index + ' - ' + '⛔️ Check in box is NOT checked');
        }
    }

    function checkMenu(event) {
        let ul = document.getElementById('ul');
        let inputes = ul.getElementsByTagName('input')

        if (event.target.checked) {
            for (let input of inputes) {
                input.checked = true;
            }
        } else {
            for (let input of inputes) {
                input.checked = false;
            }
        }
    }

    function deleteAll() {
        let ul = document.getElementById('ul');
        let inputes = ul.getElementsByTagName('input')

        let object = Object.assign({}, value)
        let keys = Object.keys(value);
        for (let i = 0; i < inputes.length; i++) {
            if (inputes[i].checked == true) {
                let id = inputes[i].getAttribute('id')
                if (keys.includes(id))
                    delete object[id];
            }
        }
        setValue(Object.values(object))
        //  will be better to remove marks by rigth order
    }

    function setStyle() {
        let ul = document.getElementById('ul');
        let inputes = ul.getElementsByTagName('input')

        for (let i = 0; i < inputes.length; i++) {
            let id = inputes[i].getAttribute('id')
            if (inputes[i].checked == true) {
                document.getElementById('Li' + id).setAttribute('style', 'color: blue;')
            } else {
                document.getElementById('Li' + id).setAttribute('style', 'color: black;')
            }
        }
        setValue(value)
    }

    let result = value.map((item, index) => (
        < li key={index} id={'Li' + index}>
            <p>
                <span>
                    <input id={index} type="checkbox" onChange={(e) => toChange(e, index)} />
                </span>
                {item}
                <span>
                    <button onClick={() => deleteByIndex(index)}>X</button>
                </span>
            </p>
        </li >));


    let keysLength = Object.keys(check).length;
    let valuesLength = Object.keys(value).length;

    let divStyle = (keysLength !== 0 && valuesLength !== 0) ?
        { visibility: 'visible' } :
        (keysLength !== 0 && valuesLength === 0) ?
            { visibility: 'hidden', position: 'absolute' } :
            { visibility: 'hidden', position: 'absolute' };

    let actionMenu = (
        <div style={divStyle}>
            <input type="checkbox" onChange={(e) => checkMenu(e)} />
            <button onClick={() => setStyle()}>mark done</button>
            <button onClick={() => deleteAll()}>delete</button>
        </div>
    )

    return (
        <>
            <div>
                <h1>Title</h1>
                <input type="text" id="titleInput"></input>
                <button onClick={addValue}>add task</button>
            </div>
            {actionMenu}
            <div>
                <ul id='ul' style={{ listStyle: 'none' }}>
                    {result}
                </ul>
            </div>
        </>
    )
}

export default ToDoList;