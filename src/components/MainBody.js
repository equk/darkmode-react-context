import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const MainBody = () => {
	const { darkMode } = useContext(ThemeContext);
	const theme = !darkMode ? 'lightmode' : 'darkmode';

	return (
		<div className={"" + (theme)}>
			<div className="main-body">
				<h1>Example Darkmode</h1>
				<div>
					<p>Example project using React Hooks, React Context &amp; React State.</p>
					<p>Uses localstorage for user setting &amp; supports <code>prefers-color-scheme</code> browser setting.</p>
				</div>
				<h1>Context</h1>
				<div>
					<div>
						<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
						<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
					</div>
				</div>
				<h1>Context</h1>
				<div>
					<div>
						<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
						<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
					</div>
				</div>
				<h1>Context</h1>
				<div>
					<div>
						<p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
						<p>In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
					</div>
				</div>
				<div>
					<h2>Ref: https://reactjs.org/docs/context.html</h2>
				</div>
			</div>
		</div>
	)
}

export default MainBody;
