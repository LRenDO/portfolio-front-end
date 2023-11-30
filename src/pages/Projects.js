import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

function Projects(){
    const collectionName = 'projects';
    const capitalizedName = collectionName.charAt(0).toUpperCase() +
                            collectionName.slice(1);
    const [cardData, setCardData] = useState([]);

    useEffect(()=>{
        async function getProjects(){
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URI}/${collectionName}`);  
                if(!res.ok){ 
                    throw res.statusText
                }else{
                    setCardData(await res.json());
                }
            } catch (error) {
                console.error(`Error fetching ${collectionName}: ${error}`);
            }
        }
        getProjects();
        return;
    }, [cardData.length]);

    return(
        <Cards heading={capitalizedName} cardData={cardData} layout='grid' />
    )
}

export default Projects;