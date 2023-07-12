import { IVars } from '../../../types';

function getFromLocalStorage <T extends string> (item: T) {
	const gotValue = localStorage.getItem(item);
	if (gotValue) return JSON.parse(gotValue);
}

const variables: IVars = {
	currentLevel: getFromLocalStorage('currentLevel') || 1,
	maxLevel: 13,
	passedLevels: getFromLocalStorage('passed') || [],
	isHintUsed: false,
	passedWithHint: getFromLocalStorage('hinted') || [],
};

export default variables;
