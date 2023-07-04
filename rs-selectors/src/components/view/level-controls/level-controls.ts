import './level-controls.css';
import LEVELS from '../../controller/manageLevels//levels';
import variables from '../../controller/manageLevels/variables';
import GameField from '../game-field/game-field';

export default class LevelControl {
    sidebar: HTMLDivElement | null = document.querySelector('.sidebar');
    gameField = new GameField();
    resetBtn: HTMLButtonElement | null = document.querySelector('.sidebar__reset-btn');

    resetProgress() {

        localStorage.setItem('currentLevel', JSON.stringify(1));
        variables.currentLevel = 1;

        variables.passedLevels = [];
        localStorage.setItem('passed', JSON.stringify(variables.passedLevels));

        this.gameField.initialField();
        this.updateLevels();
    }

    writeLevels() {
        const currentLevel = variables.currentLevel;
        console.log(localStorage);
        console.log(currentLevel);
        const levelsWrapper: HTMLDivElement = document.createElement('div');
        levelsWrapper.classList.add('levels-control');
        for (const level of LEVELS) {
            if (level.level !== variables.maxLevel) {
                const levelTitle: HTMLParagraphElement = document.createElement('p');
            levelTitle.classList.add('levels__title',  `levels__title_${level.level}`);
            levelTitle.setAttribute('level', String(level.level));
            levelTitle.innerHTML = `<span>Level ${level.level}</span> ${level.name}`;
            
            if (currentLevel) {
                if (currentLevel === level.level) levelTitle.classList.add('levels__title_active');
            } else if (level.level === 1) {
                levelTitle.classList.add('levels__title_active');
            }

            this.isPassedLevel(level.level, levelTitle);

            levelsWrapper.append(levelTitle);
        }
        this.sidebar?.append(levelsWrapper);
        this.setListener();
            }
            
    }

    private setListener() {
        const navItems: NodeListOf<HTMLElement> = document.querySelectorAll('.levels__title');
        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                const levelAttribute = item.getAttribute('level');
                const newLevel = Number(levelAttribute);
                
                // TODO REFACTOR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                variables.currentLevel = newLevel;
                localStorage.setItem('currentLevel', JSON.stringify(newLevel));
                this.updateLevels();

                this.gameField.clearField();
                this.gameField.initialField();
            });
        });
        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', this.resetProgress.bind(this));
        }
    }

    isPassedLevel(level: number, el: HTMLElement) {
        const passedLevels = variables.passedLevels;

        if (passedLevels.includes(level)) {
            el.classList.add('levels__title_passed');
        }
    }

    updateLevels() {
        const currentLevel = variables.currentLevel;
        const passedLevels = variables.passedLevels;
        const levelsTitle = document.querySelectorAll('.levels__title');
        levelsTitle.forEach((item, index) => {
            if (item.classList.contains('levels__title_active')) {
                item.classList.remove('levels__title_active');
            }
            if (item.classList.contains(`levels__title_${currentLevel}`)) {
                item.classList.add('levels__title_active');
            }

            if (item.classList.contains(`levels__title_${currentLevel}`)) {
                this.isPassedLevel(currentLevel - 1, levelsTitle[index - 1] as HTMLElement);
            }
            if (item.classList.contains('levels__title_passed')) {
                if (!((index + 1) in passedLevels)) item.classList.remove('levels__title_passed');
            }
        });
    }
}