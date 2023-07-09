import Editor from "../../../../src/components/view/editor/editor";

describe('Editor', () => {
    const editor = new Editor();

    beforeEach(() => {
        localStorage.clear();
    });

    test("Should correctly update LocalStorage", () => {
        const level = 6;
        editor.updateLocalStorage(level);
        const passedLevels = localStorage.passed;
        const currentLevel = localStorage.currentLevel;
        expect(passedLevels).toBe("[6]");
        expect(currentLevel).toBe('7');
    });
    
})