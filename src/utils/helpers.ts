import { WithKey } from './types';

export const withKeys = <T, K extends string = 'key'>(
	arr: T[],
	keyName?: K,
	startingIndex = 0,
): WithKey<T, K>[] =>
	arr.map(
		(obj, i) =>
			({ ...obj, [keyName ?? 'key']: i + startingIndex } as WithKey<T, K>),
	);

export const convertArrToObj = <T extends object, K extends keyof T>(
	arr: T[],
	keyField: K,
): Record<string, T> => {
	return arr.reduce((obj, item) => {
		obj[`${item[keyField]}`] = item;
		return obj;
	}, {} as Record<string, T>);
};

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export const convertArrToObjOmitKey = <T extends object, K extends keyof T>(
	arr: T[],
	keyField: K,
): Record<string, Omit<T, K>> => {
	return arr.reduce((obj, item) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { [keyField]: _, ...rest } = item;
		obj[`${item[keyField]}`] = rest;
		return obj;
	}, {} as Record<string, Omit<T, K>>);
};

export const splitArray = <T>(inputArray: T[], size: number): T[][] => {
	const result = [];
	for (let i = 0; i < inputArray.length; i += size) {
		const chunk = inputArray.slice(i, i + size);
		result.push(chunk);
	}
	return result;
};
