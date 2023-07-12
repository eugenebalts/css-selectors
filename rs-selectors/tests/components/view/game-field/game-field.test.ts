import GameField from '../../../../src/components/view/game-field/game-field';

describe('GameField', () => {
    const gameField = new GameField();

    test('Defines initialField method', () => {
        const result = gameField['initialField']();
        expect(result).toBeUndefined();
    })

    test('Defines clearField method', () => {
        const result = gameField['clearField']();
        expect(result).toBeUndefined();
    })

    test('Defines writeHTML method', () => {
        const result = gameField['writeHTML']();
        expect(result).toBeUndefined();
    })

    test('Defines setHoverListeners method', () => {
        const result = gameField['setHoverListeners']();
        expect(result).toBeUndefined();
    })
})