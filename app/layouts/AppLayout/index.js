import Metas from './metas';
import Header from 'shared/Header/';
import 'styles/main.styl';

const AppLayout = ({ children }) => (
	<div className={'app-layout'}>
		<Header />
		<Metas />
		<main className="main-content">
			{ children }
		</main>
	</div>
);

export default AppLayout;
