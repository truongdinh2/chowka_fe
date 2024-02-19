import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';

import { ReactNode } from 'react';

import { locales } from '@/lib/locales';
import { Providers } from '@/state/store/providers';
import { LoadingProvider } from '@/ui/context/loading-provider';
import AppFooter from '@/ui/layout/footer';
import AppHeader from '@/ui/layout/header';
import { Social } from '@/ui/layout/social';
import clsx from 'clsx';
import { NextIntlClientProvider, createTranslator } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';

import './../globals.css';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
// 	title: 'ChowShop',
// 	description: 'Generated by create next app',
// 	themeColor: '#09090b',
// 	manifest: 'https://expense.fyi/manifest.json',
// 	viewport: {
// 		width: 'device-width',
// 		initialScale: 1,
// 		userScalable: false,
// 	},
// };
type Props = {
	children: ReactNode;
	params: { locale: string };
};

async function getMessages(locale: string) {
	try {
		return (await import(`@/messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
}

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
	const messages = await getMessages(locale);

	// You can use the core (non-React) APIs when you have to use next-intl
	// outside of components. Potentially this will be simplified in the future
	// (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
	const t = createTranslator({ locale, messages });

	return {
		title: 'chowShop',
	};
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
	const messages = await getMessages(locale);

	return (
		<html className="h-full" lang={locale}>
			<body className={clsx(inter.className, 'flex h-full flex-col')}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<NextTopLoader color="#0076ff" height={2} showSpinner={false} />
					<LoadingProvider>
						<Providers>
							<AppHeader />
							<div className="h">{children}</div>
							<div className='m-auto mt-10 mb-5'>
								<Social />
							</div>
							<AppFooter />
						</Providers>
					</LoadingProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
