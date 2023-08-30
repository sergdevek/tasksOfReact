function Pagination(props) {

    let i = 0;
    let result = [];
    let count = 1;

    for (i; i < props.countArticles;) {
        result.push(<li className="page-item"><a className="page-link" href="#">{count}</a></li>)
        i += props.limit;
        count += 1;
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {result}
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;