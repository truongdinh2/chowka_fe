import { NextRequest, NextResponse } from 'next/server';

import acceptLanguage from 'accept-language';
import createMiddleware from 'next-intl/middleware';

import { locales } from './lib/locales';

acceptLanguage.languages(locales);
const intlMiddleware = createMiddleware({
	locales,
	defaultLocale: 'vi',
});
export const config = {
	// Skip all paths that should not be internationalized
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
const langName = 'i18next';
const isFirstGoWeb = 'true';
export function middleware(req: NextRequest, res: NextResponse) {
	let lng;
	if (req.cookies.has(langName)) lng = acceptLanguage.get(req.cookies.get(langName)?.value);
	if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	if (!lng) {
		lng = 'vi';
		res.cookies.set(langName, lng);
	}
	if ([lng, '/'].includes(req.nextUrl.pathname) && !!req.cookies.has(isFirstGoWeb)) {
		res.cookies.set(isFirstGoWeb, 'false');
		let url = lng !== 'vi' ? `/${lng}/sample` : `/vi/sample`;
		return NextResponse.redirect(new URL(url, req.url));
	}
	return intlMiddleware(req);
}
