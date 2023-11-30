import './Section.css';

function Section({heading, sectionData}){
    return (
        <section id={heading.toLowerCase()} className={heading.toLowerCase()}>
            <h2>{heading}</h2>
            <p>{sectionData}</p>
        </section>
    )
}

export default Section;