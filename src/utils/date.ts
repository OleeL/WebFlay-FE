import { convertArrToObjOmitKey, withKeys } from './helpers';

type DateFormat = {
	name: string;
	abbreviated: string;
};

type Month = DateFormat & {
	days: number;
};

type Day = DateFormat;

export const isLeapYear = (year: number): boolean => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getMonths = (year: number) => {
	const keyName = 'month';
	const months = convertArrToObjOmitKey(
		withKeys<Month, 'month'>(
			[
				{ name: 'January', days: 31, abbreviated: 'Jan' },
				{
					name: 'February',
					days: isLeapYear(year) ? 29 : 28,
					abbreviated: 'Feb',
				},
				{ name: 'March', days: 31, abbreviated: 'Mar' },
				{ name: 'April', days: 30, abbreviated: 'Apr' },
				{ name: 'May', days: 31, abbreviated: 'May' },
				{ name: 'June', days: 30, abbreviated: 'Jun' },
				{ name: 'July', days: 31, abbreviated: 'Jul' },
				{ name: 'August', days: 31, abbreviated: 'Aug' },
				{ name: 'September', days: 30, abbreviated: 'Sep' },
				{ name: 'October', days: 31, abbreviated: 'Oct' },
				{ name: 'November', days: 30, abbreviated: 'Nov' },
				{ name: 'December', days: 31, abbreviated: 'Dec' },
			],
			keyName,
		),
		keyName,
	);

	return months;
};

export const getDays = () =>
	withKeys<Day, 'day'>(
		[
			{ name: 'Monday', abbreviated: 'Mon' },
			{ name: 'Tuesday', abbreviated: 'Tue' },
			{ name: 'Wednesday', abbreviated: 'Wed' },
			{ name: 'Thursday', abbreviated: 'Thu' },
			{ name: 'Friday', abbreviated: 'Fri' },
			{ name: 'Saturday', abbreviated: 'Sat' },
			{ name: 'Sunday', abbreviated: 'Sun' },
		],
		'day',
	);
