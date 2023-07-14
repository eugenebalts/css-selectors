import LevelControl from "../../../../src/components/view/level-controls/level-controls";
import state from "../../../../src/components/controller/manageLevels/variables";

describe('LevelControl', () => {
    const levelControl = new LevelControl()
    beforeEach(() => {
        localStorage.clear();
    })

    test('Should set class "levels__title_passed" to navigation element if this level was passed', () => {
        state.set('passedLevels', [2, 4]);
        state.set('passedWithHint', [2]);
        const fakeElement1 = document.createElement('div');
        const fakeElement2 = document.createElement('div');
        const fakeElement3 = document.createElement('div');
        const isHintUsed = false;

        levelControl.isPassedLevel(2, fakeElement1, isHintUsed);
        levelControl.isPassedLevel(3, fakeElement2, isHintUsed);
        levelControl.isPassedLevel(4, fakeElement3, isHintUsed);

        expect(fakeElement1.classList.contains('levels__title_passed')).toBe(true);
        expect(fakeElement1.classList.contains('levels__title_hint-used')).toBe(true);
        expect(fakeElement2.classList.contains('levels__title_passed')).toBe(false);
        expect(fakeElement2.classList.contains('levels__title_hint-used')).toBe(false);
        expect(fakeElement3.classList.contains('levels__title_passed')).toBe(true);
        expect(fakeElement3.classList.contains('levels__title_hint-used')).toBe(false);
        

    })
})