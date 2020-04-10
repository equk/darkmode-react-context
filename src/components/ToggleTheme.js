import React, { useContext } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { ThemeContext } from '../context/ThemeContext';

const ToggleTheme = () => {
	const { darkMode, toggleDark } = useContext(ThemeContext);

	return (
		<div className="darkmode-container">
			<button className="toggle-darkmode" onClick={toggleDark}>
			{darkMode ? (
				<img src={sun} className="sun-icon" alt="sun-icon" />
			) : (
				<img src={moon} className="moon-icon" alt="moon-icon" />
			)}
			</button>
 		</div>
	)
}

export default ToggleTheme;
