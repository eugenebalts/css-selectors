import {Levels} from '../../../types'

const LEVELS: Levels = [
	{
		level: 1,
		name: 'Tags',
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
        
	},
	{
		level: 2,
		name: 'Tags',
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
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
		],
		objectsToFind: ['scooter1'],
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
	},
	{
		level: 4,
		name: 'Tag inside',
		class: 'level-4',
		objects: [
			{
				image: 'car-red2',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'car-truck1',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
			{
				image: 'car-green1',
				row: 'vehicle_top-line',
				class: 'vehicle'
			},
		],
		objectsToFind: ['car-green1'],
	}
];

export default LEVELS;