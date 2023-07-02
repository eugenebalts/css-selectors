import {Levels} from '../../../types';
import './levels.css';

const LEVELS: Levels = [
	{
		level: 1,
		name: 'A',
		class: 'level-1',
		objects: [
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-red1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			}
		],
		objectsToFind: ['car-green1', 'car-red1'],
		rightAnswer: 'car'
        
	},
	{
		level: 2,
		name: 'A',
		class: 'level-2',
		objects: [
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'scooter1',
				row: 'vehicle_down-line',
				classGeneral: 'vehicle'
			},
		],
		objectsToFind: ['scooter1'],
		rightAnswer: 'scooter',
	},
	{
		level: 3,
		name: '#id',
		class: 'level-3',
		objects: [
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-police1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
		],
		objectsToFind: ['car-police1'],
		rightAnswer: '#police',
	},
	{
		level: 4,
		name: 'A B',
		class: 'level-4',
		objects: [
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-truck1',
				row: 'vehicle_down-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
		],
		objectsToFind: ['car-green1'],
		rightAnswer: 'truck car',
	},
	{
		level: 5,
		name: '.classname',
		class: 'level-5',
		objects: [
			{
				image: 'car-red1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle'
			},
		],
		objectsToFind: ['car-red1'],	
		rightAnswer: '.red',
	},
	{
		level: 6,
		name: '#id, .classname',
		class: 'level-6',
		objects: [
			{
				image: 'car-police1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				id: 'police',
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				classAdditional: 'green'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				classAdditional: 'red'
			},
		],
		objectsToFind: ['car-police1', 'car-green1'],	
		rightAnswer: '#police, .green',
	},
	{
		level: 7,
		name: 'A#id, #id B',
		class: 'level-6',
		objects: [
			{
				image: 'car-police1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				id: 'police',
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				classAdditional: 'green'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				classGeneral: 'vehicle',
				classAdditional: 'red'
			},
		],
		objectsToFind: ['car-police1', 'car-green1'],	
		rightAnswer: '#police, .green',
	},
];

export default LEVELS;