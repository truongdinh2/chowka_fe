'use client';

import Sample from '@/ui/sample';
import { useTranslations } from 'next-intl';

const Page = () => {
	const t = useTranslations('Index');
	return (
		<div>
			<Sample />
		</div>
	);
};

export default Page;
