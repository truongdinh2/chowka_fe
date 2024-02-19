'use client';

import { useRouter } from 'next/navigation';

import Logo from '@/public/icons/logo.png';
// import { useTranslation } from 'react-i18next';
// import { useTranslation } from '@/app/i18n/client';
// import { useTranslation } from '@/app/i18n/client';
import { useFormatter, useTranslations } from 'next-intl';

import AppImage from '../common/image';
import { AppLink } from '../common/link';
import Notification from '../common/notifications';
import LocaleSwitcher from '../lang-switch';
import { useRef } from 'react';

const AppHeader = () => {
	const route = useRouter();
	const t = useTranslations('Layout');
	// console.log("i18n", i18n);
	const comRef = useRef();
	return (
		<nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
			<div className="flex w-full flex-wrap items-center justify-between pl-7 pr-4">
				<button
					className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
					type="button"
					data-te-collapse-init
					data-te-target="#navbarSupportedContent1"
					aria-controls="navbarSupportedContent1"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="[&>svg]:w-7">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
							<path
								fillRule="evenodd"
								d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</button>

				<div
					className="!visible hidden flex-grow items-center lg:!flex justify-between"
					id="navbarSupportedContent1"
					data-te-collapse-item
				>
					<AppImage src={Logo} alt="logo" className="h-6 w-6" onClick={() => route.push(`/`)} />
					<ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row" data-te-navbar-nav-ref>
						<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
							<AppLink variant="title" href="/create-design" className="ml-3">
								{t('create-design')}
							</AppLink>
						</li>
						<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
							<AppLink variant="title" href="/trend" className="ml-3">
								{t('trend')}
							</AppLink>
						</li>
						<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
							<AppLink variant="title" href="/sale-game" className="ml-3">
								{t('sale-game')}
							</AppLink>
						</li>
						<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
							<AppLink variant="title" href="/blog" className="ml-3">
								{t('blog')}
							</AppLink>
						</li>
						<li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
							<AppLink variant="title" href="/sample" className="ml-3">
								sample
							</AppLink>
						</li>
					</ul>
				</div>

				<div className="flex items-center gap-x-4">
					<LocaleSwitcher />
					<div className='cursor-pointer'>
						<span className="[&>svg]:w-5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
							</svg>
						</span>
					</div>
					<div className="relative cursor-pointer">
						<span className="[&>svg]:w-5">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
								<path
									fillRule="evenodd"
									d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
						<Notification>1</Notification>
					</div>
					<div>
						<AvatarDefault/>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default AppHeader;

const AvatarDefault = () => {
	return(
		<div className="relative w-6 h-6 overflow-hidden bg-gray-100 cursor-pointer">
		<svg
			className="absolute w-5 h-6 text-gray-400 left-[2.4px] top-[-0.4px]"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
		</svg>
	</div>
		)
};
