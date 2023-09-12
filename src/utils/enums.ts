import { ObjectValues } from './types';

export const searchEngines = {
	google: 1,
	bing: 2,
	duckDuckGo: 3,
} as const;

export type SearchEngine = ObjectValues<typeof searchEngines>;

export const searchEngineNames: Record<SearchEngine, string> = {
	[searchEngines.google]: 'Google',
	[searchEngines.bing]: 'Bing',
	[searchEngines.duckDuckGo]: 'DuckDuckGo',
};
