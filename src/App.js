import React from 'react';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import ThemeContextProvider from './context/ThemeContext';

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Navbar />
				<MainBody />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
