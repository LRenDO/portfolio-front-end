import './AnchorButton.css';

const STYLES = ['btn--dark', 'btn--light', 'btn--transparent'];
const SIZES = ['btn--medium', 'btn--large'];

function AnchorButton({text, btnStyle, btnSize}){
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnStyle) ? btnSize : SIZES[0];
  return (
    <a href='#cards' className={`btn ${checkBtnStyle} ${checkBtnSize}`}>
      {text}
    </a>
  )
};

export default AnchorButton;