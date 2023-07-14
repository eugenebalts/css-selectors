import './editor.css';
import LEVELS from '../../controller/manageLevels/levels';
import GameField from '../game-field/game-field';
import LevelControl from '../level-controls/level-controls';
import state from '../../controller/manageLevels/variables';

class Editor {
    editorWrapper: HTMLDivElement | null =
        document.querySelector('.editor__wrapper');
    inputCss: HTMLInputElement | null =
        document.querySelector('.input__input-css');
    enterBtn: HTMLButtonElement | null =
        document.querySelector('.editor__enter-btn');
    GameField = new GameField();
    LevelControl = new LevelControl();
    helpBtn: HTMLButtonElement | null =
        document.querySelector('.editor__help-btn');

    public editorListeners(): void {
        this.enterBtn?.addEventListener('click', this.checkAnswer.bind(this));
        this.inputCss?.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') this.checkAnswer();
            this.inputCss?.focus();
        });
        this.helpBtn?.addEventListener('click', this.help.bind(this));
    }

    public help(): void {
        if (this.inputCss) {
            this.inputCss.value = '';
            const currentLevel: number = state.get('currentLevel');
            const rightAnswer = LEVELS[currentLevel - 1].rightAnswer;
            if (this.helpBtn) this.helpBtn.disabled = true;
            rightAnswer[0]?.split('').forEach((item, i) => {
                setTimeout(() => {
                    if (this.inputCss) this.inputCss.value += item;
                    this.inputCss?.focus();
                }, i * 100);
            });
            setTimeout(() => {
                if (this.helpBtn) this.helpBtn.disabled = false;
            }, 3000);

            state.isHintUsed = true;
        }
    }

    private checkAnswer(): void {
        this.inputCss?.focus();
        const currentLevel: number = state.get('currentLevel');
        const maxLevel: number = state.maxLevel;
        const rightAnswer: Array<string> = LEVELS[currentLevel - 1].rightAnswer;
        const objectsToFind = document.querySelectorAll('.to-find');
        if (this.inputCss) {
            if (
                rightAnswer.includes(this.inputCss.value.trim()) ||
                currentLevel === maxLevel
            ) {
                if (maxLevel >= currentLevel + 1) {
                    state.set('currentLevel', currentLevel + 1);
                    this.updateLocalStorage(currentLevel);
                } else {
                    state.reset('currentLevel');
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
                    this.LevelControl.updateLevels();
                    this.GameField.initialField();
                    state.isHintUsed = false;
                }, 1500);
                this.inputCss.value = '';
            } else {
                this.editorWrapper?.classList.add('editor__wrapper_incorrect');
                setTimeout(() => {
                    this.editorWrapper?.classList.remove(
                        'editor__wrapper_incorrect',
                    );
                }, 300);
            }
        }
    }

    public updateLocalStorage(level: number, method = 'standard'): void {
        const passedLevels: Array<number> = state.get('passedLevels');
        if (!passedLevels.includes(level)) {
            passedLevels.push(level);
            state.set('passedLevels', passedLevels);
        }

        if (state.isHintUsed === true) {
            const passedWithHint: Array<number> = state.get('passedWithHint');
            passedWithHint.push(level);
            state.set('passedWithHint', passedWithHint);
        }

        localStorage.setItem('currentLevel', JSON.stringify(level + 1));

        if (method === 'restart') {
            localStorage.setItem('currentLevel', JSON.stringify(1));
        }
    }
}

export default Editor;
