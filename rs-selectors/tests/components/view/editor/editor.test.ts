import Editor from "../../../../src/components/view/editor/editor";
import variables from "../../../../src/components/controller/manageLevels/variables";

describe('Editor', () => {
    let editor = new Editor();
    let mockVariables,
        mockInputCss,
        mockHelpBtn
    ;
    document.body.innerHTML = `
        <div class="field"></div>
        <input class="input__input-css" type="text">
        <button class="editor__help-btn"></button>
    `;

    

    beforeEach(() => {
        editor = new Editor();
        localStorage.clear();
    });

    test("Should correctly update LocalStorage and switch current level", () => {
        const currentLevel = 6;
        editor.updateLocalStorage(currentLevel);
        const passedLevels = localStorage.passed;
        const newCurrentLevel = localStorage.currentLevel;
        expect(passedLevels).toBe("[6]");
        expect(newCurrentLevel).toBe('7');
    });

    test("Should clean inputCss and make button disabled", () => {
        const inputCss = document.querySelector('.input__input-css') as HTMLInputElement;
        const helpBtn = document.querySelector('.editor__help-btn') as HTMLButtonElement;

        inputCss.value = 'Our old solution';
        editor.help();

        expect(inputCss.value).toBe('');
        expect(helpBtn.disabled).toBe(true);
    });

})