import { IVars } from '../../../types';

const DEFAULT: Partial<IVars> = {
	currentLevel: 1,
	passedLevels: [],
	passedWithHint: [],
	isHintUsed: false,
};

class State {
    maxLevel: number;
    isHintUsed: boolean;
    currentLevel: number;
    passedLevels: number[];
    passedWithHint: number[];

    constructor() {
		this.maxLevel = 13;
		this.isHintUsed = false;
		this.currentLevel = this.get('currentLevel');
		this.passedLevels = this.get('passedLevels');
		this.passedWithHint = this.get('passedWithHint');
    }

    public get<T>(key: keyof IVars): T {
		const value: string | null = localStorage.getItem(key);
		return value ? JSON.parse(value) : DEFAULT[key];
    }

    public set<T>(key: keyof IVars, data: T) {
		localStorage.setItem(key, JSON.stringify(data));
    }

	public reset(key: keyof IVars) {
		localStorage.setItem(key, JSON.stringify(DEFAULT[key]));
	}
}

const state = new State();

export default state;