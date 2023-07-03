import './global.css';
import App from './components/controller/app';

function AppInit() {
	alert('Привет! Друг, пожалуйста, если можно, можешь не проверять буквально до 16 часов по Минску (04/07). Последние 3 дня у меня был переезд, только 03 переселился. Мне буквально пару фич доделать. Буду очень thakfull ♥');
	const Application = new App();
	Application.start();
}

AppInit();
