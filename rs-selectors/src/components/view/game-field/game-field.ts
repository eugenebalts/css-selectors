import LEVELS from '../../controller/manageLevels//levels';
import './game-field.css';
import variables from '../../controller/manageLevels/variables';

export default class GameField {
	gameField: HTMLDivElement | null = document.querySelector('.field');
	mainTitle: HTMLHeadElement | null = document.querySelector('.main__title');

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

			if (this.mainTitle) {
				if (levelProps.find) {
					this.mainTitle.textContent = `Select ${levelProps.find}`;
				}
			}

			const objectsArray = levelProps.objects;
			for (const car in objectsArray) {
				const carContainer = document.createElement('div');
				carContainer.classList.add('vehicle__container',`${objectsArray[car].row}`, `${objectsArray[car].image}`);
				if (objectsArray[car].tag) carContainer.setAttribute('data-tag', `${objectsArray[car].tag}`);

				const carImage: HTMLImageElement = document.createElement('img');
				carImage.src = `./images/${objectsArray[car].image}.png`;
				carImage.classList.add(`${objectsArray[car].classGeneral}`);
				if (objectsArray[car].classAdditional) carImage.classList.add(`${objectsArray[car].classAdditional}`);
				if (levelProps.objectsToFind.includes(objectsArray[car].image)) {
					carContainer.classList.add('to-find');
				}

				const marker = document.createElement('div');
				marker.classList.add('vehicle__mark');
				if (objectsArray[car].tag) marker.textContent = objectsArray[car].tag as string;

				// carContainer.addEventListener('mouseover', (event) => {
				// 	if (event.target instanceof HTMLElement) {
				// 		event.target.classList.add('mark__visible');
				// 	}
				// });

				// carContainer.addEventListener('mouseleave', (event) => {
				// 	if (event.target instanceof HTMLElement) {
				// 		event.target.classList.remove('mark__visible');
				// 	}
				// });

				carContainer.append(marker);
				carContainer.append(carImage);
				this.gameField.append(carContainer);
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