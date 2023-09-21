import { NextRequest, NextResponse } from 'next/server';

import acceptLanguage from 'accept-language';
import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './lib/locales';

acceptLanguage.languages(locales);
const intlMiddleware = createIntlMiddleware({
	locales,
	defaultLocale: 'vi',
});
export const config = {
	// Skip all paths that should not be internationalized
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
const cookieName = 'i18next';
let isFirstGoWeb = true;
export function middleware(req: NextRequest, res: NextResponse) {
	let lng;
	if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
	if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
	if (!lng) {
		lng = 'vi';
		res.cookies.set(cookieName, lng);
	}
	if ([lng, '/'].includes(req.nextUrl.pathname) && isFirstGoWeb) {
		isFirstGoWeb = false;
		let url = lng !== 'vi' ? `/${lng}/sample` : `/vi/sample`;
		return NextResponse.redirect(new URL(url, req.url));

	}
	return intlMiddleware(req);
}
