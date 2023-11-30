import './Button.css';

const STYLES = ['btn--dark', 'btn--light', 'btn--transparent'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({text, type, onClick, btnStyle, btnSize}){
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnStyle) ? btnSize : SIZES[0];
  return (
    <a href='#cards' className='btn-mobile' >
      <button className={`btn ${checkBtnStyle} ${checkBtnSize}`}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </a>
  )
};

export default Button;