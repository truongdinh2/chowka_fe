'use client';

import { useTransition } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/navigation';
import { locales } from '@/lib/locales';

import AppSelect, { Option } from './select/app-select';

export default function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const methods = useForm({
		mode: 'onTouched',
		defaultValues: {
			locale,
		},
	});

	const { handleSubmit } = methods;

	const localeOptions: Option[] = locales.map((item) => ({
		value: item,
		label: t('locale', { locale: item }),
	}));

	const onSelectChange = (newValue: Option) => {
		const nextLocale = (newValue.value ?? locale) as string;
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(() => {})} className="min-w-fit px-2 space-y-3">
				<AppSelect
					name="locale"
					options={localeOptions}
					onChangeInput={onSelectChange}
					placeholder=""
					isSearchable={false}
				/>
			</form>
		</FormProvider>
	);
}
