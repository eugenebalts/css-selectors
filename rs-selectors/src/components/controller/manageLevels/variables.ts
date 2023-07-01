const lsGetPassed = localStorage.getItem('passed');
const lsGetCurrent = localStorage.getItem('currentLevel');

const variables: IVars = {
	currentLevel: lsGetCurrent ? JSON.parse(lsGetCurrent) : 1,
	maxLevel: 4,
	passedLevels: lsGetPassed ? [...JSON.parse(lsGetPassed)] : [],
};

interface IVars {
	currentLevel: number,
	maxLevel: number,
	passedLevels: number[];
}

export default variables;
