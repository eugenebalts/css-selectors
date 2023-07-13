import LEVELS from '../../controller/manageLevels//levels';
import { ILevel, ICar } from '../../../types';
import './game-field.css';
import state from '../../controller/manageLevels/variables';

export default class GameField {
	public gameField: HTMLDivElement | null = document.querySelector('.field');
	private mainTitle: HTMLHeadElement | null = document.querySelector('.main__title');
	private inputHint: HTMLDivElement | null = document.querySelector('.input__hint_html');

	public initialField():void {
		const currentLevel: number = state.get('currentLevel');

		if (this.gameField) {
			if (this.gameField.getAttribute('class')) {
				this.gameField.removeAttribute('class');
				this.gameField.classList.add('field');
			}

			this.clearField();

			const levelProps: ILevel =  LEVELS[currentLevel - 1];
			this.gameField.classList.add(levelProps.class);
			const road = document.createElement('img');
			road.classList.add('field__background');
			road.src = './images/road.png';
			this.gameField.append(road);

			if (this.mainTitle) {
				if (levelProps.find) {
					this.mainTitle.textContent = `Select ${levelProps.find}`;
				}
			}

			const objectsArray: Array<ICar> = levelProps.objects;
			for (const car in objectsArray) {
				const carContainer: HTMLDivElement = document.createElement('div');
				carContainer.classList.add('vehicle__container',`${objectsArray[car].row}`, `${objectsArray[car].image}`);

				if (objectsArray[car].tag) carContainer.setAttribute('data-tag', `${objectsArray[car].tag}`);

				const carImage: HTMLImageElement = document.createElement('img');
				carImage.src = `./images/${objectsArray[car].image}.png`;
				carImage.classList.add(`${objectsArray[car].classGeneral}`);

				if (objectsArray[car].classAdditional) carImage.classList.add(`${objectsArray[car].classAdditional}`);

				if (levelProps.objectsToFind.includes(objectsArray[car].image)) carContainer.classList.add('to-find');

				carContainer.append(carImage);
				this.gameField.append(carContainer);
			}
		}
		this.writeHTML();
	}

	public writeHTML():void {
		const currentLevel: number = state.get('currentLevel');
		const levelProps: ILevel =  LEVELS[currentLevel - 1];
		const HTMLCode: Array<string> = levelProps.code;

		if (this.inputHint instanceof HTMLDivElement) {
			this.inputHint.innerHTML = '';
			HTMLCode.forEach((string, index) => {
				const carContainer: HTMLDivElement | null = document.querySelector(`.${levelProps.objects[index].image}`);
				const htmlString = document.createElement('div');
				htmlString.classList.add('html-string');
				htmlString.setAttribute('data-connect', String(index));
				if (carContainer) carContainer.setAttribute('data-connect', String(index));
				htmlString.textContent = `${string}`;
				this.inputHint?.append(htmlString);
			});
		}
		this.setHoverListeners();
	}

	private setHoverListeners():void {
		if (this.gameField) {
			window.addEventListener('mouseover', (event) => {
				const HTMLStrings: Array<HTMLElement> | [] = Array.from(document.querySelectorAll('.html-string'));
				const carsArray: Array<HTMLDivElement> | [] = Array.from(document.querySelectorAll('.vehicle__container'));
				if (event.target instanceof HTMLElement) {
					if (event.target.closest('.vehicle__container')) {
						const carContainer: HTMLElement | null = event.target.closest('.vehicle__container');
						if (carContainer) {
							const carDataAttribute: string | null = carContainer.getAttribute('data-connect');
							HTMLStrings.forEach((string) => {
								if (string.getAttribute('data-connect') === carDataAttribute) {
									string.classList.add('html-string_hovered');
								} else {
									string.classList.remove('html-string_hovered');
								}
							});
						}
					} else {
						HTMLStrings.forEach((string) => {
							string.classList.remove('html-string_hovered');
						});
					}
					if (event.target.classList.contains('html-string')) {
						const stringDataAttribute: string | null = event.target.getAttribute('data-connect');
						carsArray.forEach((car) => {
							const carDataAttribute = car.getAttribute('data-connect');
							if (stringDataAttribute === carDataAttribute) {
								car.classList.add('vehicle__container_hovered');
							} else {
								car.classList.remove('vehicle__container_hovered');
							}
						});
					} else {
						carsArray.forEach((car) => {
							car.classList.remove('vehicle__container_hovered');
						});
					}
				}
			});
		}
	}

	public clearField():void {
		if (this.gameField) {
			while (this.gameField.firstChild) {
				this.gameField.removeChild(this.gameField.firstChild);
			}
		}
	}
}