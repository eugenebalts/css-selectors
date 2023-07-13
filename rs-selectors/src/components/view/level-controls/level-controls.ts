import './level-controls.css';
import LEVELS from '../../controller/manageLevels//levels';
import state from '../../controller/manageLevels/variables';
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
        const currentLevel: number  = state.get('currentLevel');
        const isHintUsed: boolean = state.isHintUsed;
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
        const currentLevel: number  = state.get('currentLevel');
        const passedLevels: number[] = state.get('passedLevels');
        const isHintUsed: boolean = state.isHintUsed;
        const levelsTitle: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.levels__title');
        levelsTitle.forEach((item, index) => {
            if (item.classList.contains('levels__title_active')) item.classList.remove('levels__title_active');
            if (item.classList.contains(`levels__title_${currentLevel}`)) item.classList.add('levels__title_active');
            if (item.classList.contains(`levels__title_${currentLevel}`)) this.isPassedLevel(currentLevel - 1, levelsTitle[index - 1] as HTMLElement, isHintUsed);
            
            if (type === 'reset') {
                if (item.classList.contains('levels__title_passed')) {
                    if (!((index + 1) in passedLevels)) item.classList.remove('levels__title_passed');
                }
            }
        });
    }

    public isPassedLevel(level: number, el: HTMLElement, hint: boolean):void {
        const passedLevels: number[] = state.get('passedLevels');
        const passedWithHint: number[] = state.get('passedWithHint');

        if (passedLevels.includes(level)) el.classList.add('levels__title_passed');
        if (passedWithHint.includes(level)) el.classList.add('levels__title_hint-used');
        if (hint === true) el.classList.add('levels__title_hint-used');
    }

    private resetProgress():void {
        localStorage.setItem('currentLevel', JSON.stringify(1));
        state.reset('currentLevel');
        state.reset('passedLevels');
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
                state.isHintUsed = false;
                const levelAttribute: string | null = item.getAttribute('level');
                const newLevel = Number(levelAttribute);

                if (newLevel !== LEVELS.length) {
                    state.set('currentLevel', newLevel);
                    this.updateLevels();
                    this.gameField.initialField();
                }
            });
        });
    }
}