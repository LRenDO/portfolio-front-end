import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; 

function Footer(){
    return(
        <>
            <div className='clear-fix'></div>
            <footer id='contact' className='contact'>
                <a href="https://www.linkedin.com/in/ren-demeis-ortiz/" title='LinkedIn' className='linkedin' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size={'2x'} />
                    <span className='sr-only'>LinkedIn</span>
                    </a>
                <a href="https://github.com/LRenDO/" title='GitHub' className='github' target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={['fab', 'github']} size={'2x'} />
                    <span className='sr-only'>GitHub</span>
                </a>
            </footer>
        </>
    )
}

export default Footer;