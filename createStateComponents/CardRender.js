import { useState } from "react"

function CardRender(props) {

    let generalStyle = {
        marginBottom: '100px',
    }

    let basicStyle = {
        display: 'flex',
        flexWrap: 'wrap'
    }

    let btnStyle = {
        width: '100px',
        height: '50px'
    }

    let newBtnStyle = {
        visibility: 'hidden'
    }

    const [cardsNumber, setCardsNumber] = useState(2);
    const [btnState, setBtnState] = useState(btnStyle);

    let cardRender = props.cards.slice(0, cardsNumber)

    return (
        <div style={generalStyle}>
            <div style={basicStyle}>
                {cardRender}
            </div>
            <button style={btnState} onClick={(e) => setCardsNumber(() => {
                if ((props.cards.length - cardsNumber) >= 2) {
                    return (cardsNumber + 2);
                } else {
                    setBtnState(newBtnStyle);
                    return cardsNumber + (props.cards.length - cardsNumber);
                }
            }, e
            )}>show 2 more</button>
        </div >
    )
}

export default CardRender;