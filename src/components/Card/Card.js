import React from 'react';
import './Card.css'

const Card = props => {
    
    const rank = props.rank.toLowerCase();
    const classCard = ['Card'];
    classCard.push('Card-rank-' + rank)

    let suitCard = '';

    if(props.suit === 'D') {
        classCard.push('Card-diams');
        suitCard = '♦';
    } else if(props.suit === 'H'){
        classCard.push('Card-hearts');
        suitCard = '♥';
    } else if(props.suit === 'S'){
        classCard.push('Card-spades');
        suitCard = '♠';
    } else {
        classCard.push('Card-clubs');
        suitCard = '♣';
    }

    return(
        <div className={classCard.join(' ')}>
            <span className="Card-rank">{props.rank}</span>
            <span className="Card-suit">{suitCard}</span> 
        </div>
    )
}
export default Card;