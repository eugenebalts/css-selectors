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

	setListener() {
		this.enterBtn?.addEventListener('click', this.checkAnswer.bind(this));
	}

	checkAnswer() {
		const lvl = Number(variables.currentLevel);
		const rightAnswer = LEVELS[lvl - 1].rightAnswer;
		const objectsToFind = document.querySelectorAll('.to-find');
		if (this.inputCss) {
			if (this.inputCss.value === rightAnswer) {
				if (variables.maxLevel >= lvl + 1) {
					console.log(variables.currentLevel);
					variables.currentLevel = String(lvl + 1);
					console.log(variables.currentLevel);
				} else {
					variables.currentLevel = String(1);
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
					this.LevelControl.writeLevels();
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
}

export default Editor;