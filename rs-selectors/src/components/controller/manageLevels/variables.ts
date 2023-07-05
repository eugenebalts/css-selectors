const lsGetPassed = localStorage.getItem('passed');
const lsGetCurrent = localStorage.getItem('currentLevel');

const variables: IVars = {
	currentLevel: lsGetCurrent ? JSON.parse(lsGetCurrent) : 1,
	maxLevel: 13,
	passedLevels: lsGetPassed ? [...JSON.parse(lsGetPassed)] : [],
	isHintUsed: false,
};

interface IVars {
	currentLevel: number,
	maxLevel: number,
	passedLevels: number[];
	isHintUsed: boolean,
}

export default variables;
