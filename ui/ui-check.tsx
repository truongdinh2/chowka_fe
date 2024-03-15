'use client';

import Link from 'next/link';

import { ComponentProps } from 'react';

import { usePathname } from '@/navigation';
import clsx from 'clsx';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
	href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			aria-current={isActive}
			className={clsx(
				'inline-block px-2 py-3 transition-colors',
				isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
			)}
			href={href}
			{...rest}
		/>
	);
}
