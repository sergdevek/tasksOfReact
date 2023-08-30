function ColorText(props) {
    return (
        <p className={props.color} role="alert">{props.text}</p>
    )
}

export default ColorText;