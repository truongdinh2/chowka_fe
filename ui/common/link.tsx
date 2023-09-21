'use client';

import { usePathname } from 'next/navigation';

// i18nLink.js
import { cn } from '@/utils/tail-merge';
import { VariantProps, cva } from 'class-variance-authority';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

type LinkProps = React.ComponentProps<typeof Link>;

const linkVariants = cva('px-2 transition duration-150 ease-in-out hover:text-sky-700  active:text-rose-500', {
	variants: {
		variant: {
			default: 'underline decoration-transparent text-sky-700 focus:text-violet-600 hover:decoration-inherit',
			title: 'text-slate-500 text-base capitalize',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});
export interface LinkVariants extends LinkProps, VariantProps<typeof linkVariants> {
	href: string;
}
export function AppLink(props: LinkVariants) {
	const { href, children, variant, className, ...param } = props;
	const t = useTranslations('Index');
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<>
			<Link className={cn(linkVariants({ variant, className }))} href={href} {...param}>
				{children}
			</Link>
		</>
	);
}
// import clsx from 'clsx';
// import {usePathname} from 'next-intl/client';
// import {ComponentProps} from 'react';

// type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
//   href: string;
// };

// export default function NavigationLink({href, ...rest}: Props) {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link
//       aria-current={isActive}
//       className={clsx(
//         'inline-block px-2 py-3 transition-colors',
//         isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
//       )}
//       href={href}
//       {...rest}
//     />
//   );
// }
