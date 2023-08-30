function Button(props) {
    let result = (props.type == "button" | props.type == "submit") ? (
        <input
            type={props.type}
            className={props.butStyle}
            value={props.butText}
        />
    ) : (
        <a
            href={props.url}
            className={props.butStyle}
        >
            {props.butText}
        </a>
    )

    return (
        <>
            {result}
        </>
    )
}

export default Button;