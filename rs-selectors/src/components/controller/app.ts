import LevelControl from '../view/level-controls/level-controls';
import GameField from '../view/game-field/game-field';
import Editor from '../view/editor/editor';
import variables from './manageLevels/variables';

export default class App {
	levelControl = new LevelControl();
	gameField = new GameField();
	editor = new Editor();
	level = variables.currentLevel;

	start() {
		this.levelControl.writeLevels();
		this.gameField.initialField();
		this.editor.editorListeners();
	}
}