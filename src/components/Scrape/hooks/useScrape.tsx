'use client';

import { ScrapeResult, ScrapeResultResponse } from '@/types/ScrapeResult';
import { SearchEngine, searchEngines } from '@/utils/enums';
import dayjs from 'dayjs';
import { FormEvent, useEffect, useMemo, useState } from 'react';

export const useScrape = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [url, setUrl] = useState('https://infotrack.co.uk');
	const [urlDisabled, setUrlDisabled] = useState(true);
	const [searchEngine, setSearchEngine] = useState<SearchEngine>(
		searchEngines.google,
	);
	const [results, setResults] = useState<ScrapeResult | null>(null);
	const [loading, setLoading] = useState(false);
	const [confetti, setConfetti] = useState(false);

	const timeout: NodeJS.Timeout | undefined = undefined;

	const submitDisabled = !searchTerm || !url || loading;

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		if (submitDisabled) return;
		e.preventDefault();
		setLoading(true);
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/scrape?name=${searchTerm}&url=${url}&searchEngine=${searchEngine}`,
			{
				method: 'GET',
			},
		);

		const response = (await res.json()) as ScrapeResultResponse;
		setLoading(false);
		setResults({ ...response, createdOn: dayjs(response.createdOn) });
		if (response.position.split(',').some(x => x === '1')) {
			setConfetti(true);
			setTimeout(() => setConfetti(false), 1000);
		}
	};

	useEffect(() => {
		return () => clearTimeout(timeout);
	}, [timeout]);

	const resultsArray = useMemo(
		() => results?.position.split(',') ?? [],
		[results?.position],
	);

	return {
		searchTerm,
		setSearchTerm,
		url,
		setUrl,
		loading,
		results,
		searchEngine,
		setSearchEngine,
		urlDisabled,
		setUrlDisabled,
		onSubmit,
		confetti,
		submitDisabled,
		resultsArray,
	};
};
