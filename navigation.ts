import { locales } from '@/lib/locales';
import { Pathnames, createLocalizedPathnamesNavigation } from 'next-intl/navigation';

// export const localePrefix = 'always'; // Default
export const pathnames = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	// '/': '/',
	// '/blog': '/blog',
	// // If locales use different paths, you can
	// // specify each external path per locale.
	// '/about': {
	//   en: '/about',
	//   de: '/ueber-uns'
	// },
	// // Dynamic params are supported via square brackets
	// '/news/[articleSlug]-[articleId]': {
	//   en: '/news/[articleSlug]-[articleId]',
	//   de: '/neuigkeiten/[articleSlug]-[articleId]'
	// },
	// // Also (optional) catch-all segments are supported
	// '/categories/[...slug]': {
	//   en: '/categories/[...slug]',
	//   de: '/kategorien/[...slug]'
	// }
} satisfies Pathnames<typeof locales>;
export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({ locales, pathnames });
