import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const prefersDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeContextProvider = (props) => {
	const [darkMode, setdarkMode] = useState();

	const toggleDark = () => {
		setdarkMode(!darkMode)
		localStorage.setItem('darkMode', JSON.stringify(!darkMode))
	}

	useEffect(() => {
		setdarkMode(false)
		const lsDark = JSON.parse(localStorage.getItem('darkMode'))
    if (lsDark) {
      setdarkMode(lsDark)
    } else if (prefersDarkMode()) {
      setdarkMode(true)
    }
	}, [])

	const { children } = props;
	return (
		<ThemeContext.Provider value={{ darkMode, toggleDark }}>
 			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;


