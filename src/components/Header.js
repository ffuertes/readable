import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="app-header">
			<Link to="/" className="app-title">Readable | A React-Redux App</Link>
		</header>
	);
}

export default Header;