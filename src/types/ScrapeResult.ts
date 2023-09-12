import { SearchEngine } from '@/utils/enums';
import { Dayjs } from 'dayjs';

export type ScrapeResultResponse = {
	name: string;
	url: string;
	position: string;
	searchEngine: SearchEngine;
	createdOn: string;
};

export type ScrapeResult = {
	name: string;
	url: string;
	position: string;
	searchEngine: SearchEngine;
	createdOn: Dayjs;
};
