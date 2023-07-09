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
	helpBtn: HTMLButtonElement | null = document.querySelector('.editor__help-btn');

	public editorListeners():void {
		this.enterBtn?.addEventListener('click', this.checkAnswer.bind(this)); // Check answer for mouse click
		this.inputCss?.addEventListener('keypress', (event) => { // Check answer for keyboard
			if (event.key === 'Enter') this.checkAnswer();
			this.inputCss?.focus();
		});
		this.helpBtn?.addEventListener('click', this.help.bind(this));
	}

	public help():void {
		if (this.inputCss) {
			this.inputCss.value = '';
			const currentLevel: number = variables.currentLevel;
			const rightAnswer = LEVELS[currentLevel - 1].rightAnswer;
			if (this.helpBtn) this.helpBtn.disabled = true;
			rightAnswer[0]?.split('').forEach((item, i) => {
				setTimeout(() => { // Smooth print effect
					if (this.inputCss) this.inputCss.value += item;
					this.inputCss?.focus();
				}, i * 100);
			});
			setTimeout(() => { // Make button disabled while hint is printing
				if (this.helpBtn) this.helpBtn.disabled = false;
			}, 3000);

			variables.isHintUsed = true;
		}
	}

	private checkAnswer():void {
		this.inputCss?.focus();
		const currentLevel: number = variables.currentLevel;
		const rightAnswer: Array<string> = LEVELS[currentLevel - 1].rightAnswer;
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
				setTimeout(() => { // Switch level after animation ends
					this.LevelControl.updateLevels();
					this.GameField.initialField();
					variables.isHintUsed = false;
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

	public updateLocalStorage(level: number, method = 'standard'):void {
		const passedLevels: Array<number> = variables.passedLevels;
		if (!passedLevels.includes(level)) {
			variables.passedLevels.push(level);
			localStorage.setItem('passed', JSON.stringify(variables.passedLevels));
		}

		if (variables.isHintUsed === true) {
			variables.passedWithHint.push(level);
			localStorage.setItem('hinted', JSON.stringify(variables.passedWithHint));
		}

		localStorage.setItem('currentLevel', JSON.stringify(level + 1));

		if (method === 'restart') {
			localStorage.setItem('currentLevel', JSON.stringify(1));
		}
	}
}

export default Editor;