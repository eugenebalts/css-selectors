import { IVars } from '../../../types';

const lsGetPassed = localStorage.getItem('passed');
const lsGetCurrent = localStorage.getItem('currentLevel');
const lsGetHinted = localStorage.getItem('hinted');

const variables: IVars = {
	currentLevel: lsGetCurrent ? JSON.parse(lsGetCurrent) : 1,
	maxLevel: 13,
	passedLevels: lsGetPassed ? [...JSON.parse(lsGetPassed)] : [],
	isHintUsed: false,
	passedWithHint: lsGetHinted ? [...JSON.parse(lsGetHinted)] : [],
};

export default variables;
