import './global.css';
import App from './components/controller/app';

function AppInit(): void {
	const Application = new App();
	Application.start();
}

AppInit();
