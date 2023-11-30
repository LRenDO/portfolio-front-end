
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CardItem.css';

function CardItem({cardData, layout}){
    return(
        <section className='card'>
            {cardData.icon && <FontAwesomeIcon icon={['fab', cardData.icon]}/>}
            <h3>{cardData.name}</h3>
            {cardData.image && <img src={process.env.PUBLIC_URL + `images/${cardData.image}`} alt={cardData.imgAlt}/>}
            {cardData.description && <p>{cardData.description}</p>}
        </section>
    )
}

export default CardItem;