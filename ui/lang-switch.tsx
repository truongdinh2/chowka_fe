'use client';

import { useTransition } from 'react';

import { locales } from '@/lib/locales';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { FormProvider, useForm } from 'react-hook-form';

import AppSelect, { Option } from './select/app-select';

export default function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();
	const onSelectChange = (newValue: Option) => {
		const nextLocale = (newValue.value ?? locale) as string;
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	};
	const methods = useForm({
		mode: 'onTouched',
		defaultValues: {
			locale: locale,
		},
	});
	const optionCustom = locales.map((item) => ({ value: item, label: t('locale', { locale: item }) }));
	const { handleSubmit } = methods;
	
	return (
		<FormProvider key={'hi'} {...methods}>
			<form onSubmit={handleSubmit(() => {})} className=" min-w-fit space-y-3 px-2">
				<AppSelect name="locale" options={optionCustom} onChangeInput={onSelectChange} placeholder={''} isSearchable={false} />
			</form>
		</FormProvider>
		// <label
		//   className={clsx(
		//     'relative text-gray-400',
		//     isPending && 'transition-opacity [&:disabled]:opacity-30'
		//   )}
		// >

		//   <select
		//     className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
		//     defaultValue={locale}
		//     disabled={isPending}
		//     onChange={onSelectChange}
		//   >
		//     {locales.map((cur) => (
		//       <option key={cur} value={cur}>
		//         {t('locale', {locale: cur})}
		//       </option>
		//     ))}
		//   </select>
		//   <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
		// </label>
	);
}
