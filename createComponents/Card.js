function Card(props) {
    return (
        <div class="card" style={props.imgStyle}>
            <img src={props.imgSrc} class="card-img-top" alt={props.alt} />
            <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p class="card-text">{props.cardText}</p>
                <a href={props.cardLik} class={props.cardLikStyle}>{props.cardLikText}</a>
            </div>
        </div>
    )
}

export default Card;