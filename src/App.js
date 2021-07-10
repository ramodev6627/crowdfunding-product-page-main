import styled from 'styled-components';
import { Header } from './components/Header';
import { ProjectAbout } from './components/project/ProjectAbout';
import { ProjectHeader } from './components/project/ProjectHeader';
import { ProjectStats } from './components/project/ProjectStats';

const StyledApp = styled.div`
	background-color: #fafafa;
	padding-bottom: 3em;

	.container {
		width: 90%;
		max-width: 700px;
		margin: 0 auto;
	}
`;

function App() {
	return (
		<StyledApp>
			<Header />
			<div className="container">
				<ProjectHeader />
				<ProjectStats />
				<ProjectAbout />
			</div>
		</StyledApp>
	);
}

export default App;
