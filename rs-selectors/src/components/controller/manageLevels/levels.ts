import {Levels} from '../../../types';

const LEVELS: Levels = [
	{
		level: 1,
		name: 'A',
		class: 'level-1',
		objects: [
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'car-red1',
				row: 'vehicle_top-line',
				class: 'vehicle'
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
				class: 'vehicle'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'scooter1',
				row: 'vehicle_down-line',
				class: 'vehicle'
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
				class: 'vehicle'
			},
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'car-police1',
				row: 'vehicle_top-line',
				class: 'vehicle'
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
				class: 'vehicle'
			},
			{
				image: 'car-truck1',
				row: 'vehicle_down-line',
				class: 'vehicle'
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
		],
		objectsToFind: ['car-green1'],
		rightAnswer: 'truck car',
	},
	{
		level: 5,
		name: '#id A',
		class: 'level-4',
		objects: [
			{
				image: 'car-truck1',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'car-truck1',
				row: 'vehicle_down-line',
				class: 'vehicle'
			},
			{
				image: 'car-truck1',
				row: 'vehicle_down-line',
				class: 'vehicle'
			},
		],
		objectsToFind: ['car-green1'],	
		rightAnswer: 'truck car',
	},
];

export default LEVELS;