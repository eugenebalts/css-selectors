import LevelControl from '../view/level-controls/level-controls';
import GameField from '../view/game-field/game-field';
import Editor from '../view/editor/editor';

export default class App {
	private levelControl = new LevelControl();
	private gameField = new GameField();
	private editor = new Editor();

	public start() {
		this.levelControl.writeLevels();
		this.gameField.initialField();
		this.editor.editorListeners();
	}
}