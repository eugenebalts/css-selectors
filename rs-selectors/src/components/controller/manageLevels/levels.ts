import {Levels} from '../../../types';
import './levels.css';

const objects = {
	'car-green1': {
		image: 'car-green1',
		row: 'vehicle_top-line',
		classGeneral: 'vehicle',
		classAdditional: 'green',
		tag: '<car class="green" />',
	},
	'car-red1': {
		image: 'car-red1',
		row: 'vehicle_top-line',
		classGeneral: 'vehicle',
		classAdditional: 'red',
		tag: '<car class="red" private />',
	},
	'car-red2': {
		image: 'car-red2',
		row: 'vehicle_top-line',
		classGeneral: 'vehicle',
		classAdditional: 'red',
		tag: '<car class="red" />',
	},
	'scooter1': {
		image: 'scooter1',
		row: 'vehicle_down-line',
		classGeneral: 'vehicle',
		classAdditional: 'scooter',
		tag: '<scooter />'
	},
	'car-police1': {
		image: 'car-police1',
		row: 'vehicle_top-line',
		classGeneral: 'vehicle',
		id: 'police',
		tag: '<car id="police" owner="Government"/>'
	},
	'car-truck1': {
		image: 'car-truck1',
		row: 'vehicle_down-line',
		classGeneral: 'vehicle',
		classAdditional: 'truck',
		tag: '<truck owner="Government">',
	},
	'car-truck2': {
		image: 'car-truck2',
		row: 'vehicle_down-line',
		classGeneral: 'vehicle',
		classAdditional: 'truck',
		tag: '<truck owner="Government">',
	},
	'congratulations': {
		image: 'congratulations',
		row: 'center',
		classGeneral: 'congratulations',
	},
	
};

const LEVELS: Levels = [
	{
		level: 1,
		name: 'A',
		class: 'level-1',
		objects: [objects['car-green1'], objects['car-red1']],
		objectsToFind: ['car-green1', 'car-red1'],
		rightAnswer: 'car',
		find: 'Tag'
	},
	{
		level: 2,
		name: 'A',
		class: 'level-2',
		objects: [
			objects['car-green1'],
			objects['car-red2'],
			objects['scooter1'],
		],
		objectsToFind: ['scooter1'],
		rightAnswer: 'scooter',
		find: 'Tag'
	},
	{
		level: 3,
		name: '#id',
		class: 'level-3',
		objects: [
			objects['car-green1'], objects['car-red2'], objects['car-police1'],
		],
		objectsToFind: ['car-police1'],
		rightAnswer: '#police',
		find: 'car using ID'
	},
	{
		level: 4,
		name: 'A B',
		class: 'level-4',
		objects: [
			objects['car-red2'],
			objects['car-truck2'],
			objects['car-green1'],
		],
		objectsToFind: ['car-green1'],
		rightAnswer: 'truck car',
		find: 'tag inside tag'
	},
	{
		level: 5,
		name: '.classname',
		class: 'level-5',
		objects: [
			objects['car-red1'],
			objects['car-green1'],
		],
		objectsToFind: ['car-red1'],	
		rightAnswer: '.red',
		find: 'car using class'
	},
	{
		level: 6,
		name: '#id, .classname',
		class: 'level-6',
		objects: [
			objects['car-police1'],
			objects['car-green1'],
			objects['car-red2'],
		],
		objectsToFind: ['car-police1', 'car-green1'],	
		rightAnswer: '#police, .green',
		find: 'police and green cars'
	},
	{
		level: 7,
		name: '#id ~ A',
		class: 'level-7',
		objects: [
			objects['car-police1'],
			objects['car-truck2'],
			objects['car-red2'],
		],
		objectsToFind: ['car-truck2'],	
		rightAnswer: '#police ~ truck',
		find: 'neighbor'
	},
	{
		level: 8,
		name: 'nth-child(n)',
		class: 'level-8',
		objects: [
			objects['car-red1'],
			objects['car-truck1'],
			objects['car-truck2'],
		],
		objectsToFind: ['car-truck2'],	
		rightAnswer: 'truck:nth-child(2)',
		find: 'second truck'
	},
	{
		level: 9,
		name: ':empty',
		class: 'level-9',
		objects: [
			objects['car-red1'],
			objects['car-truck1'],
			objects['car-truck2'],
			
		],
		objectsToFind: ['car-truck2'],	
		rightAnswer: 'truck:empty',
		find: 'empty truck'
	},
	{
		level: 10,
		name: '[attribute]',
		class: 'level-10',
		objects: [
			objects['car-red1'],
			objects['car-police1'],
			objects['car-truck2'],
			
		],
		objectsToFind: ['car-red1'],	
		rightAnswer: '[private]',
		find: 'attribute name'
	},
	{
		level: 11,
		name: '[attribute="value"]',
		class: 'level-11',
		objects: [
			objects['car-red1'],
			objects['car-police1'],
			objects['car-truck2'],
			
		],
		objectsToFind: ['car-police1', 'car-truck2'],	
		rightAnswer: '[owner="Government"]',
		find: 'attribute with the value'
	},
	{
		level: 12,
		name: '*',
		class: 'level-12',
		objects: [
			objects['car-red1'],
			objects['car-police1'],
			objects['car-truck2'],
			objects['car-red2'],
			objects['scooter1'],
		],
		objectsToFind: ['car-red1', 'car-police1', 'car-truck2', 'scooter1', 'car-red2'],	
		rightAnswer: '*',
		find: 'all elements'
	},
	{
		level: 13,
		name: 'Congratulations',
		class: 'level-12',
		objects: [
			objects['congratulations'],
		],
		objectsToFind: ['congratulations'],	
		rightAnswer: 'restart',
		find: 'all elements'
	},
];

export default LEVELS;