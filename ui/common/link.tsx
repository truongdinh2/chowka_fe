'use client';

// import { Link } from '@/navigation';
// i18nLink.js
import Link from 'next/link';

import { cn } from '@/utils/tail-merge';
import { VariantProps, cva } from 'class-variance-authority';
import { useTranslations } from 'next-intl';

type LinkProps = React.ComponentProps<typeof Link>;

const linkVariants = cva(' transition duration-150 ease-in-out hover:text-sky-700  active:text-rose-500', {
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
export interface LinkVariants extends LinkProps, VariantProps<typeof linkVariants> {}
export function AppLink(props: LinkVariants) {
	const { href, children, className, ...param } = props;
	const t = useTranslations('Index');
	return (
		<>
			<Link className={cn(linkVariants({ className }))} href={href as string} {...param}>
				{children}
			</Link>
		</>
	);
}
