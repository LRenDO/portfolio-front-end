import { useEffect, useState } from 'react';
import ResumeSection from '../components/ResumeSection';

function Experience(){
    const [experiences, setExperiences] = useState([]);

    useEffect(()=>{
        async function getExperiences(){
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URI}/experiences`);  
                if(!res.ok){ 
                    throw res.statusText
                }else{
                    setExperiences(await res.json());
                }
            } catch (error) {
                console.error(`Error fetching experiences: ${error}`);
            }
        }
        getExperiences();
        return;
    }, [experiences.length]);

    return(
        <ResumeSection heading="Experience" workExperience={experiences} />
    )

}

export default Experience;