import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';


function Navbar(){
	const [click, setClick] = useState(false);
	
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);
	
	return(	
		<nav className='navbar'>
			<div className='mobile-nav-container'>
				<a href='#' className='nav-logo' title='Home'><span className='sr-only'>Home</span>
			    <span aria-hidden='true'>&#60; / &#62;</span>
				</a>
				<button className='menu-icon' onClick={handleClick} type='button' aria-label={click ? 'Close Menu':'Open Menu'} title='Open Menu'>
					<FontAwesomeIcon icon={faBars} size='lg' />
				</button>
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				{click && <li className='nav-item close-menu-icon'  onClick={closeMenu}>
					<FontAwesomeIcon icon={faTimes}/></li>}
				<li className='nav-item'>
				<a href='#home' className='nav-link' onClick={closeMenu}>
					Home
				</a>
				</li>
				<li className='nav-item'>
					<a href='#about' className='nav-link' onClick={closeMenu}>
						About
					</a>
				</li>
				<li className='nav-item'>
					<a href='#skills' className='nav-link' onClick={closeMenu}>
						Skills
					</a>
				</li>
				<li className='nav-item'>
					<a href='#projects' className='nav-link' onClick={closeMenu}>
						Projects
					</a>
				</li>
				<li className='nav-item'>
					<a href='#experience' className='nav-link' onClick={closeMenu}>
						Experience
					</a>
				</li>
				<li className='nav-item'>
					<a href='#contact' className='nav-link' onClick={closeMenu}>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;