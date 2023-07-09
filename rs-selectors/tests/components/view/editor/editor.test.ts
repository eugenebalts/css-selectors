import Editor from "../../../../src/components/view/editor/editor";

describe('Editor', () => {
    const editor = new Editor();

    beforeEach(() => {
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
    
})