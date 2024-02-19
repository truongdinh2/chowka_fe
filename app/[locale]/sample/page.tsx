'use client';

import Head from 'next/head';

import Sample from '@/ui/sample';
import { useTranslations } from 'next-intl';

// export async function generateMetadata() {

// 	// You can use the core (non-React) APIs when you have to use next-intl
// 	// outside of components. Potentially this will be simplified in the future
// 	// (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
// 	return {
// 		title: "sample",
// 	};
// }
const Page = () => {
	const t = useTranslations('Index');
	return (
		<div>
			<Head>
				<title>My page title</title>
			</Head>
			<Sample />
		</div>
	);
};

export default Page;
