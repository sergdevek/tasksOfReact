function Nav(props) {

    return (
        <ul>
            {props.items.map((item) => (
                <li><a href={item.link}>{item.title}</a></li>
            ))}
        </ul>
    );
}

export default Nav;