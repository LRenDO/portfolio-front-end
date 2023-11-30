import './Cards.css';
import CardItem from './CardItem';

function Cards({heading, cardData, layout}){

    const cardsList = buildCardItems(cardData);

    return(
        <section className={layout + ' ' + heading.toLowerCase()} id={heading.toLowerCase()}>
            <h2>{heading}</h2>
            <ul>
                {cardsList}
            </ul>
        </section>
    )
}

function buildCardItems(cardData){

    const cardsList = [];
    cardData.forEach((card, index, heading)=>{
                        cardsList.push(
                            <li key={heading + 'card ' + index}>
                                <CardItem cardData={card} />
                            </li>
                        )
                    })
    
    return cardsList;
}

export default Cards;