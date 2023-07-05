import LEVELS from '../../controller/manageLevels//levels';
import './game-field.css';
import variables from '../../controller/manageLevels/variables';

export default class GameField {
	gameField: HTMLDivElement | null = document.querySelector('.field');
	mainTitle: HTMLHeadElement | null = document.querySelector('.main__title');
	inputHint: Element | null = document.querySelectorAll('.input__hint')[1];
	// editor = new Editor();

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
				carContainer.append(marker);
				carContainer.append(carImage);
				this.gameField.append(carContainer);
				

				carContainer.addEventListener('mouseover', (event) => {
					const HTMLStrings = document.querySelectorAll('.html-string');
						HTMLStrings.forEach((string) => {
							if (event.target instanceof HTMLElement) {
								if (event.target.classList.contains('vehicle__container')) {
									if (event.target.getAttribute('data-connect') === string.getAttribute('data-connect')) {
										string.classList.add('html-string_hovered');
									}
								} else if (event.target.closest('.vehicle__container')) {
									if (event.target.closest('[data-connect]')?.getAttribute('data-connect') === string.getAttribute('data-connect')) {
										string.classList.add('html-string_hovered');
									}
								}
							}
						});
				});

				carContainer.addEventListener('mouseleave', (event) => {
					const HTMLStrings = document.querySelectorAll('.html-string');
						HTMLStrings.forEach((string) => {
							if (event.target instanceof HTMLElement) {
								if (event.target.classList.contains('vehicle__container')) {
									if (event.target.getAttribute('data-connect') === string.getAttribute('data-connect')) {
										string.classList.remove('html-string_hovered');
									}
								} else if (event.target.closest('.vehicle__container')) {
									if (event.target.closest('[data-connect]')?.getAttribute('data-connect') === string.getAttribute('data-connect')) {
										string.classList.remove('html-string_hovered');
									}
								}
							}
						});
				});
			}
		}
		this.writeHTML();
	}

	writeHTML() {
		const currentLevel = variables.currentLevel;
		const levelProps =  LEVELS[currentLevel - 1];
		const HTMLCode: Array<string> = levelProps.code;
		const carsArray: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.vehicle__container');
		// const object = levelProps.objects;

		if (this.inputHint instanceof HTMLDivElement) {
			this.inputHint.innerHTML = '';
			HTMLCode.forEach((string, index) => {
				const carContainer: HTMLDivElement | null = document.querySelector(`.${levelProps.objects[index].image}`);
				const htmlString = document.createElement('div');
				htmlString.classList.add('html-string');
				htmlString.setAttribute('data-connect', String(index));
				if (carContainer) carContainer.setAttribute('data-connect', String(index));
				htmlString.textContent = `${string}`;
				htmlString.addEventListener('mouseover', (event) => {
					carsArray.forEach((car) => {
						if (event.target instanceof HTMLDivElement) {
							event.target.classList.add('html-string_hovered');
							if (event.target.getAttribute('data-connect') === car.getAttribute('data-connect')) {
								car.classList.add('vehicle__container_hovered');
							}
						}
					});
				});
				htmlString.addEventListener('mouseleave', (event) => {
					carsArray.forEach((car) => {
						if (event.target instanceof HTMLDivElement) {
							event.target.classList.remove('html-string_hovered');
							if (event.target.getAttribute('data-connect') === car.getAttribute('data-connect')) {
								car.classList.remove('vehicle__container_hovered');
							}
						}
					});
				});
				this.inputHint?.append(htmlString);
			});

			// TODO inputHint instead htmlString
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