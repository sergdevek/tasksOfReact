function Header(props) {
    return (
        <h1>
            <a href={props.link}>{props.title}</a>
        </h1>
    );
}

export default Header;