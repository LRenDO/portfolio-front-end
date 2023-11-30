import Section from "../components/Section";
import "./About.css";

function About(){
    const sectionCopy = 'About description here';

    return(
        <>
            <Section heading='About' sectionData={sectionCopy}/>
            <div className='clear-fix'></div>
        </>
    )

}

export default About;