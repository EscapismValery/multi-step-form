import './App.scss';
import { /* BrowserRouter */ HashRouter as Router, Routes, Route } from 'react-router-dom';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Result from './components/Result';
import NoMatch404 from './components/NoMatch404';
import Finish from './components/Finish';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Step1 />} />
					<Route path="/step2" element={<Step2 />} />
					<Route path="/step3" element={<Step3 />} />
					<Route path="/result" element={<Result />} />
					<Route path="/finish" element={<Finish />} />
					<Route path="*" element={<NoMatch404 />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
