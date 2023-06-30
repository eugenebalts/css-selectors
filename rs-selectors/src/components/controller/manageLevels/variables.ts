const variables: IVars = {
	currentLevel: localStorage.getItem('level') || 1,
	maxLevel: 4,
};

interface IVars {
	currentLevel: string | number,
	maxLevel: number,
}

export default variables;
