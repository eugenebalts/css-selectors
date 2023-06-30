type Levels = Array<ILevel>;

interface ILevel {
	level: number,
	name: string,
	class: string,
	objects: Array<ICar>,
	objectsToFind: Array<string>,
	rightAnswer: string,
}

interface ICar {
	image: string,
	row: string,
	class: string
}

export {Levels};