'use client';

import Scrape from '@/components/Scrape/Scrape';
import AppStyle from '@/style/app.module.scss';

export default function Home() {
	return (
		<>
			<main
				className={`${AppStyle.app} flex-row width-12 height-12 justify-center`}>
				<Scrape />
			</main>
		</>
	);
}
