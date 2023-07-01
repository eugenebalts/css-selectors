import './level-controls.css';
import LEVELS from '../../controller/manageLevels//levels';
import variables from '../../controller/manageLevels/variables';

export default class LevelControl {
    sidebar: HTMLDivElement | null = document.querySelector('.sidebar');

    writeLevels() {
        const currentLevel = variables.currentLevel;
        console.log(localStorage);
        console.log(currentLevel);
        const levelsWrapper: HTMLDivElement = document.createElement('div');
        levelsWrapper.classList.add('levels-control');
        for (const level of LEVELS) {
            const levelTitle: HTMLParagraphElement = document.createElement('p');
            levelTitle.classList.add('levels__title',  `levels__title_${level.level}`);
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
    }

    isPassedLevel(level: number, el: HTMLElement) {
        const passedLevels = variables.passedLevels;

        if (passedLevels.includes(level)) {
            el.classList.add('levels__title_passed');
        }
    }

    updateLevels() {
        const currentLevel = variables.currentLevel;
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
        });
    }
}