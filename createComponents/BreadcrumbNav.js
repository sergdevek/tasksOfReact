function BreadcrumbNav(props) {
    return (
        <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
                {props.nav.map((item) => (
                    <li className="breadcrumb-item">
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default BreadcrumbNav;