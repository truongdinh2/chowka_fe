import Link from 'next/link';

import { useTranslation } from '../i18n';

interface Params {
	params: { lng: string };
}
export default async function Page({ params }: Params) {
	const { lng = 'vi' } = params;
	const { t } = await useTranslation(lng);
	return (
		<div className="flex justify-end flex-col items-center">
			<h1>
				{t('title')} {lng} a
			</h1>
			<Link href="/en" locale="en">
				In english
			</Link>{' '}
			|{' '}
			<Link href="/vi" locale="vi">
				In VietNam
			</Link>
		</div>
	);
}
