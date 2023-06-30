import './level-controls.css';
import LEVELS from '../../controller/manageLevels//levels';
import variables from '../../controller/manageLevels/variables';

export default class LevelControl {
    sidebar: HTMLDivElement | null = document.querySelector('.sidebar');

    writeLevels() {
        const lvl = Number(variables.currentLevel);
        const levelsWrapper: HTMLDivElement = document.createElement('div');
        levelsWrapper.classList.add('levels-control');
        for (const level of LEVELS) {
            const levelTitle: HTMLParagraphElement = document.createElement('p');
            levelTitle.classList.add('levels__title',  `levels__title_${level.level}`);
            levelTitle.innerHTML = `<span>Level ${level.level}</span> ${level.name}`;
            
            if (lvl) {
                if (lvl === level.level) levelTitle.classList.add('levels__title_active');
            } else if (level.level === 1) {
                levelTitle.classList.add('levels__title_active');
            }

            levelsWrapper.append(levelTitle);
        }
        this.sidebar?.append(levelsWrapper);
    }
}