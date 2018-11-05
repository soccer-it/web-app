import Metas from './metas';

const AppLayout = ({ children }) => (
	<div className={'app-layout'}>
		<Metas />
		<main className="main-content">
			{ children }
		</main>
	</div>
);

export default AppLayout;
