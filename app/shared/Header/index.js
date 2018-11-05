import React from 'react';
import Img from 'components/Img';
import Button from 'components/Button';
import './Header.styl';

const Header = () => {
	return (
		<header className="main-header">
			<div className="container">
				<a className="logo" href="#">
					<Img src="images/logo-credicard.svg" />
				</a>
				<Button content="Acessar" />
			</div>
		</header>
	);
};

export default Header;
