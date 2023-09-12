import '@/style/globals.scss';
import '@/style/main.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';

config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'WebFlay',
	description: 'Developed By Oli Legg',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
