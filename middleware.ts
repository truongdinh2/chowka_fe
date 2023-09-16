import { NextRequest, NextResponse } from 'next/server';

import acceptLanguage from 'accept-language';

import { fallbackLng, languages } from './app/i18n/settings';

acceptLanguage.languages(languages);

export const config = {
	matcher: '/:lng*',
};

const cookieName = 'i18next';
let isFirstGoWeb = true;
export function middleware(req: NextRequest, res: NextResponse) {
	let lng;
	if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
	if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	if (!lng) lng = fallbackLng;

	if (req.nextUrl.pathname === `/${lng}` || req.nextUrl.pathname === '/') {
		if (isFirstGoWeb) {
			isFirstGoWeb = false;
			return NextResponse.redirect(new URL(`/${lng}/sample`, req.url));
		}
		return NextResponse.redirect(new URL(`/${lng}`, req.url));
	}

	if (req.headers.has('referer')) {
		const refererUrl = new URL(req.headers.get('referer') || '');
		const lngInReferer = languages.find((l: string) => refererUrl.pathname.startsWith(`/${l}`));
		const response = NextResponse.next();
		if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
		return response;
	}

	return NextResponse.next();
}
