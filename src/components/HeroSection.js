import AnchorButton from './AnchorButton';
import './HeroSection.css';


function HeroSection({heading, buttonText}){
	return (
    <section className='hero-section' id='home'>
      <h1>{heading}</h1>
      <AnchorButton btnStyle='btn--transparent' text={buttonText} />
    </section>
  )
}

export default HeroSection;