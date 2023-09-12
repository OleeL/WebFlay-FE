'use client';

import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { SearchEngine, searchEngineNames, searchEngines } from '@/utils/enums';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import { ordinalSuffixOf } from '@/utils/numbers';
import { ClipLoader } from 'react-spinners';
import ConfettiExplosion from 'react-confetti-explosion';
import styles from '../../style/scrape.module.scss';
import { useScrape } from './hooks/useScrape';

const searchEngineOptions = Object.values(searchEngines).map(x => ({
	value: x as SearchEngine,
	label: searchEngineNames[x],
}));

const Scrape = () => {
	const {
		searchTerm,
		setSearchTerm,
		url,
		setUrl,
		searchEngine,
		setSearchEngine,
		urlDisabled,
		setUrlDisabled,
		onSubmit,
		loading,
		confetti,
		submitDisabled,
		resultsArray,
	} = useScrape();

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<h1 className={styles.title}>WebFlay</h1>
				<Form onSubmit={onSubmit}>
					<Form.Label htmlFor="search-term">Search Term</Form.Label>
					<InputGroup className="mb-3">
						<Form.Control
							id="search-term"
							placeholder="E.g. Info Track"
							value={searchTerm}
							onChange={x => setSearchTerm(x.target.value)}
						/>
					</InputGroup>
					<Form.Label htmlFor="url">Url</Form.Label>
					<InputGroup className="mb-3">
						<Form.Control
							id="url"
							disabled={urlDisabled}
							value={url}
							onChange={x => setUrl(x.target.value)}
						/>
						<InputGroup.Text
							id="basic-addon1"
							className="cursor-pointer"
							onClick={() => setUrlDisabled(!urlDisabled)}>
							<FontAwesomeIcon icon={urlDisabled ? faLock : faUnlock} />
						</InputGroup.Text>
					</InputGroup>
					<Form.Label htmlFor="dropdown-search-engine">
						Search Engine
					</Form.Label>
					<Dropdown className="mb-3">
						<Dropdown.Toggle id="dropdown-search-engine">
							{searchEngineNames[searchEngine]}
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{searchEngineOptions.map(x => (
								<Dropdown.Item
									key={x.value}
									onClick={() => setSearchEngine(x.value)}>
									{x.label}
								</Dropdown.Item>
							))}
						</Dropdown.Menu>
					</Dropdown>
					<Button type="submit" variant="success" disabled={submitDisabled}>
						Submit
					</Button>
				</Form>
				<hr />

				<div className={styles.resultsBox}>
					<div className={styles.centeredDivChild}>
						<ClipLoader
							color={'white'}
							loading={loading}
							size={150}
							aria-label="Loading Spinner"
							data-testid="loader"
							className={styles.centered}
						/>
						{confetti && <ConfettiExplosion className={styles.centered} />}
					</div>
					{!loading &&
						resultsArray.map((x, key) => (
							<div className={styles.title} key={key}>
								{ordinalSuffixOf(+x)}
								{key !== resultsArray.length - 1 && ','}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Scrape;
