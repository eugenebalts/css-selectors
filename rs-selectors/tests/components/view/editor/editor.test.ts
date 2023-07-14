import Editor from '../../../../src/components/view/editor/editor';
import state from '../../../../src/components/controller/manageLevels/variables';

describe('Editor', () => {
    let editor = new Editor();

    document.body.innerHTML = `
        <div class="field"></div>
        <input class="input__input-css" type="text">
        <button class="editor__help-btn"></button>
    `;

    beforeEach(() => {
        editor = new Editor();
        localStorage.clear();
    });

    test('Defines help method', () => {
        const result = editor['help']();
        expect(result).toBeUndefined();
    });

    test('Defines checkAnswer method', () => {
        const result = editor['checkAnswer']();
        expect(result).toBeUndefined();
    });

    test('Defines editorListeners method', () => {
        const result = editor['editorListeners']();
        expect(result).toBeUndefined();
    });

    test('Should correctly update LocalStorage and switch current level', () => {
        const currentLevel = 6;
        editor.updateLocalStorage(currentLevel);
        const passedLevels = state.get('passedLevels');
        const newCurrentLevel = state.get('currentLevel');
        expect(passedLevels).toEqual([6]);
        expect(newCurrentLevel).toBe(7);
    });

    test('Defines update LocalStorage method', () => {
        const result = editor['updateLocalStorage'](7);
        expect(result).toBeUndefined();
    });

    test('Should clean inputCss and make button disabled', () => {
        const inputCss = document.querySelector(
            '.input__input-css',
        ) as HTMLInputElement;
        const helpBtn = document.querySelector(
            '.editor__help-btn',
        ) as HTMLButtonElement;

        inputCss.value = 'Our old solution';
        editor.help();

        expect(inputCss.value).toBe('');
        expect(helpBtn.disabled).toBe(true);
    });
});
