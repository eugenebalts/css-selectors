import './editor.css';
import LEVELS from '../../controller/manageLevels/levels';
import GameField from '../game-field/game-field';
import LevelControl from '../level-controls/level-controls';
import variables from '../../controller/manageLevels/variables';

class Editor {
	editorWrapper: HTMLDivElement | null = document.querySelector('.editor__wrapper');
	inputCss: HTMLInputElement | null = document.querySelector('.input__input-css');
	enterBtn: HTMLButtonElement | null = document.querySelector('.editor__enter-btn');
	GameField = new GameField();
	LevelControl = new LevelControl();
	level = variables.currentLevel;
	helpBtn: HTMLButtonElement | null = document.querySelector('.editor__help-btn');

	setListener() {
		this.enterBtn?.addEventListener('click', this.checkAnswer.bind(this));
		this.inputCss?.addEventListener('keypress', (event) => {
			if (event.keyCode === 13) {
				this.checkAnswer();
			}
			this.inputCss?.focus();
		});
		this.helpBtn?.addEventListener('click', this.help.bind(this));
	}

	help() {
		if (this.inputCss) {
			this.inputCss.value = '';
			const currentLevel = variables.currentLevel;
			const rightAnswer = LEVELS[currentLevel - 1].rightAnswer;
			rightAnswer[0]?.split('').forEach((item, i) => {
				setTimeout(() => {
					if (this.inputCss) this.inputCss.value += item;
				},i * 100);
			});
		}
	}

	checkAnswer() {
		this.inputCss?.focus();
		const currentLevel = variables.currentLevel;
		const rightAnswer = LEVELS[currentLevel - 1].rightAnswer;
		const objectsToFind = document.querySelectorAll('.to-find');
		if (this.inputCss) {
			if (rightAnswer.includes(this.inputCss.value.trim()) || (currentLevel === variables.maxLevel)) {
				if (variables.maxLevel >= currentLevel + 1) {
					variables.currentLevel = currentLevel + 1;
					this.updateLocalStorage(currentLevel);
				} else {
					variables.currentLevel = 1;
					this.updateLocalStorage(currentLevel, 'restart');
				}

				objectsToFind.forEach((item) => {
					item.classList.remove('to-find');
					if (item.classList.contains('vehicle_top-line')) {
						item.classList.add('vehicle_fined-top');
					} else if (item.classList.contains('vehicle_down-line')) {
						item.classList.add('vehicle_fined-down');
					}
				});
				setTimeout(() => {
					this.GameField.initialField();
					this.LevelControl.updateLevels();
				}, 1500);
				this.inputCss.value = '';
			} else {
				this.editorWrapper?.classList.add('editor__wrapper_incorrect');
				setTimeout(() => {
					this.editorWrapper?.classList.remove('editor__wrapper_incorrect');
				}, 300);
			}
		}
	}

	updateLocalStorage(level: number, method = 'standard') {
		const passedLevels = variables.passedLevels;
		if (!passedLevels.includes(level)) {
			variables.passedLevels.push(level);
			localStorage.setItem('passed', JSON.stringify(variables.passedLevels));
		}

		localStorage.setItem('currentLevel', JSON.stringify(level + 1));

		if (method === 'restart') {
			localStorage.setItem('currentLevel', JSON.stringify(1));
		}
	}
}

export default Editor;