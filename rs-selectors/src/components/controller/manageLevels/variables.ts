import { IVars } from '../../../types';

const lsGetPassed: string | null = localStorage.getItem('passed');
const lsGetCurrent: string | null = localStorage.getItem('currentLevel');
const lsGetHinted: string | null = localStorage.getItem('hinted');

const variables: IVars = {
	currentLevel: lsGetCurrent ? JSON.parse(lsGetCurrent) : 1,
	maxLevel: 13,
	passedLevels: lsGetPassed ? [...JSON.parse(lsGetPassed)] : [],
	isHintUsed: false,
	passedWithHint: lsGetHinted ? [...JSON.parse(lsGetHinted)] : [],
};

export default variables;
