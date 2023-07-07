import './level-controls.css';
import LEVELS from '../../controller/manageLevels//levels';
import variables from '../../controller/manageLevels/variables';
import GameField from '../game-field/game-field';

export default class LevelControl {
    private sidebar: HTMLDivElement | null = document.querySelector('.sidebar');
    private gameField: GameField = new GameField();
    private resetBtn: HTMLButtonElement | null = document.querySelector('.sidebar__reset-btn');
    private burgerMenuBtn: HTMLDivElement | null = document.querySelector('.burger-menu');

    private burgerMenu():void {
        this.burgerMenuBtn?.classList.toggle('burger-menu_opened');
    }

    public writeLevels():void {
        const currentLevel: number  = variables.currentLevel;
        const isHintUsed: boolean = variables.isHintUsed;
        const levelsWrapper: HTMLDivElement = document.createElement('div');
        levelsWrapper.classList.add('levels-control');
        for (const level of LEVELS) {
            const levelTitle: HTMLParagraphElement = document.createElement('p');
            levelTitle.classList.add('levels__title',  `levels__title_${level.level}`);
            levelTitle.setAttribute('level', String(level.level));
            levelTitle.innerHTML = `<span>Level ${level.level}</span> ${level.name}`;

            if (currentLevel) {
                if (currentLevel === level.level) levelTitle.classList.add('levels__title_active');
            } else if (level.level === 1) {
                levelTitle.classList.add('levels__title_active');
            }

            this.isPassedLevel(level.level, levelTitle, isHintUsed);
            levelsWrapper.append(levelTitle);
        }

        this.sidebar?.prepend(levelsWrapper);
        this.setListener();
    }

    public updateLevels(type = 'update'):void {
        const currentLevel = variables.currentLevel;
        const passedLevels = variables.passedLevels;
        const isHintUsed = variables.isHintUsed;
        const levelsTitle = document.querySelectorAll('.levels__title');
        levelsTitle.forEach((item, index) => {
            if (item.classList.contains('levels__title_active')) item.classList.remove('levels__title_active');
            if (item.classList.contains(`levels__title_${currentLevel}`)) item.classList.add('levels__title_active');
            if (item.classList.contains(`levels__title_${currentLevel}`)) this.isPassedLevel(currentLevel - 1, levelsTitle[index - 1] as HTMLElement, isHintUsed);
            
            if (type === 'reset') { // FOR RESET BUTTON
                if (item.classList.contains('levels__title_passed')) {
                    if (!((index + 1) in passedLevels)) item.classList.remove('levels__title_passed');
                }
            }
        });
    }

    public isPassedLevel(level: number, el: HTMLElement, hint: boolean):void {
        const passedLevels: number[] = variables.passedLevels;
        const passedWithHint: number[] = variables.passedWithHint;

        if (passedLevels.includes(level)) el.classList.add('levels__title_passed');
        if (passedWithHint.includes(level)) el.classList.add('levels__title_hint-used'); //IF level was passed with a hint (checks in localStorage when game is loading)
        if (hint === true) el.classList.add('levels__title_hint-used'); //IF level was passed with a hint (checks when you pass a level)
    }

    private resetProgress():void {
        localStorage.setItem('currentLevel', JSON.stringify(1));
        variables.currentLevel = 1;
        variables.passedLevels = [];
        localStorage.setItem('passed', JSON.stringify(variables.passedLevels));
        this.updateLevels('reset');
        this.gameField.initialField();
    }

    private setListener():void {
        this.switchLevel();

        if (this.resetBtn) {
            this.resetBtn.addEventListener('click', this.resetProgress.bind(this));
        }
        if (this.burgerMenuBtn) {
            this.burgerMenuBtn.addEventListener('click', this.burgerMenu.bind(this));
        }
    }

    private switchLevel():void {
        const navItems: NodeListOf<HTMLElement> = document.querySelectorAll('.levels__title');

        navItems.forEach((item) => {
            item.addEventListener('click', () => {
                const levelAttribute: string | null = item.getAttribute('level');
                const newLevel = Number(levelAttribute);

                if (newLevel !== LEVELS.length) {
                    variables.currentLevel = newLevel;
                    localStorage.setItem('currentLevel', JSON.stringify(newLevel));
                    this.updateLevels();
                    this.gameField.initialField();
                }
            });
        });
    }
}