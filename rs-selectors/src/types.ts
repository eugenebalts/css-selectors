type Levels = Array<ILevel>;

interface ILevel {
	level: number,
	name: string,
	class: string,
	objects: Array<ICar>,
	objectsToFind: Array<string>,
	rightAnswer: Array<string>,
	find: string,
}

interface ICar {
	image: string,
	row: string,
	classGeneral: string,
	classAdditional?: string,
	id?: string,
	tag?: string

}

export {Levels};