import Img from 'components/Img';
import './Header.styl';

const Header = () => {
	return (
		<header className="main-header">
			<div className="container">
				<a className="logo" href="#">
					<Img
						alt="Soccer It Logo"
						async={false}
						src="images/logo.png"
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
