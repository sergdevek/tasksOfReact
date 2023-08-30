
export default function Title(props) {
    return (
        <p style={getFetch(props.myStyle)}>
            {props.text}
        </p>
    )
}

function getFetch(fetch) {
    let result;
    if (fetch.color == "blue" | fetch.color == "red") {
        result = fetch;
    } else {
        fetch.color = "black";
        result = fetch;
    }
    return result;
}