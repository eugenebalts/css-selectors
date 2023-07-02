import LEVELS from '../../controller/manageLevels//levels';
import './game-field.css';
import variables from '../../controller/manageLevels/variables';

export default class GameField {
	gameField: HTMLDivElement | null = document.querySelector('.field');

	initialField() {
		const currentLevel = variables.currentLevel;
		if (this.gameField?.getAttribute('class')) {
			this.gameField.removeAttribute('class');
			this.gameField.classList.add('field');
		}
		if (this.gameField) {
			this.clearField();
			this.gameField.classList.add(LEVELS[currentLevel - 1].class);
			const road = document.createElement('img');
			road.classList.add('field__background');
			road.src = './images/road.png';
			this.gameField.append(road);
			const levelProps =  LEVELS[currentLevel - 1];
			const objectsArray = levelProps.objects;
			for (const car in objectsArray) {
				const carImage = document.createElement('img');
				carImage.src = `./images/${objectsArray[car].image}.png`;
				carImage.classList.add(`${objectsArray[car].classGeneral}`, `${objectsArray[car].row}`, `${objectsArray[car].image}`);
				if (objectsArray[car].classAdditional) carImage.classList.add(`${objectsArray[car].classAdditional}`);
				if (levelProps.objectsToFind.includes(objectsArray[car].image)) {
					carImage.classList.add('to-find');
				}
				this.gameField.append(carImage);
			}
			
		}
	}

	clearField() {
		if (this.gameField) {
			while (this.gameField.firstChild) {
				this.gameField.removeChild(this.gameField.firstChild);
			}
		}
	}
}