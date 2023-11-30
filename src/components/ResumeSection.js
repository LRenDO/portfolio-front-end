import './ResumeSection.css';

function ResumeSection({heading, workExperience}){

    const resumeSectionItems = buildSectionItems(workExperience, heading);
    return(
        <section className='resume-section' id={heading.toLowerCase()}>
            <h2>{heading}</h2>
            <ul className='resume-list'>
                {resumeSectionItems}
            </ul>
        </section>
    )
}

function buildSectionItems(sectionData, heading){

    let resume = [];
    sectionData.forEach((section, index, heading)=>{
                        let startDate = new Intl.DateTimeFormat('en-us', {month:'long', year: 'numeric', timezone: 'PST'})
                                        .format( new Date(section.startDate));
                        let endDate = section.isCurrent ? 'Present' :
                                    new Intl.DateTimeFormat('en-us', {month:'long', year: 'numeric', timezone: 'PST'})
                                    .format( new Date(section.endDate));
                        resume.push(
                            <li key={index} className='resume-item'>
                                <h4 className='title'>{section.title}</h4>
                                <h4 className='company'>{section.company}</h4>
                                <p className='dates'>{startDate + ' - ' + endDate}</p>
                                <p className='description'>{section.description}</p>
                            </li>
                        )
                    })
    
    return resume;
}

export default ResumeSection;