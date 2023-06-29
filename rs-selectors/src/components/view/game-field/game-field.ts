import LEVELS from '../../controller/manageLevels//levels';
import './game-field.css';

export default class GameField {
	gameField: HTMLDivElement | null = document.querySelector('.field');

	initialField(lvl: number) {
		if (this.gameField) {
			console.log('yes');
			this.gameField.classList.add(LEVELS[lvl - 1].class);
			const levelProps =  LEVELS[lvl - 1];
			const objectsArray = levelProps.objects;
			for (const car in objectsArray) {
				const carImage = document.createElement('img');
				carImage.src = `./images/${objectsArray[car].image}.png`;
				carImage.classList.add(`${objectsArray[car].row}`, `${objectsArray[car].class}`, `${objectsArray[car].image}`);
				if (levelProps.objectsToFind.includes(objectsArray[car].image)) {
					carImage.classList.add('to-find');
				}
				this.gameField.append(carImage);
			}
			
		}
	}
}