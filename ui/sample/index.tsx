'use client';

import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/hooks/storeH';
import logger from '@/lib/logger';
import AoModel from '@/public/imgs/ao-model.png';
import { increment } from '@/state/store/counterSlice';
import { AppButton } from '@/ui/common/button';
import { FormProvider, useForm } from 'react-hook-form';

import AppImage from '../common/image';
import { AppLink } from '../common/link';
import Notification from '../common/notifications';
import { useLoading } from '../context/loading-provider';
import AppSelect from '../select/app-select';
import InfoCard from './info-card';

function Sample() {
	const counter = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
	const { setLoading } = useLoading();
	const methods = useForm({
		mode: 'onTouched',
	});
	const { handleSubmit } = methods;
	const onSubmit = (data: unknown) => {
		logger({ data }, 'rhf.tsx line 26');

		// !STARTERCONF Remove console log, use logger instead
		// eslint-disable-next-line no-console
		console.log({ data });
		return;
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
				<div className="flex gap-2 p-3">
					<div className="flex-1">
						<InfoCard title="AppButton">
							<div className="flex gap-x-1">
								<AppButton variant={'default'} size={'lg'} type="submit">
									default
								</AppButton>
								<AppButton variant={'destructive'} size={'lg'}>
									destructive
								</AppButton>
								<AppButton variant={'secondary'} size={'lg'}>
									secondary
								</AppButton>
								<AppButton variant={'warning'} size={'lg'}>
									warning
								</AppButton>
								<AppButton variant={'link'} size={'lg'}>
									link
								</AppButton>
								<AppButton variant={'success'}>success</AppButton>
							</div>
						</InfoCard>
						<InfoCard title="Redux-toolkit">
							<div className="flex gap-x-2">
								<AppButton variant={'default'} onClick={() => dispatch(increment())}>
									increment
								</AppButton>
								<div>{counter}</div>
								<AppButton
									variant={'secondary'}
									onClick={() => {
										setLoading(true);
									}}
								>
									setLoadingT
								</AppButton>
								<AppButton
									variant={'secondary'}
									onClick={() => {
										setLoading(false);
									}}
								>
									setLoadingF
								</AppButton>
							</div>
						</InfoCard>
						<InfoCard title="Notification" className="flex-wrap">
							<div className="w-1/3">
								<span className="relative">
									Notice<Notification>1</Notification>
								</span>
							</div>
						</InfoCard>
					</div>
					<div className="flex-1">
						<InfoCard title="Link">
							<AppLink href="/#">Link</AppLink>
							<AppLink href="/#" variant={'title'}>
								Title
							</AppLink>
							<AppLink href="/trend">trend</AppLink>
						</InfoCard>
						<InfoCard title="Select" className="flex-wrap">
							<div className="w-1/3">
								<AppSelect menuIsOpen={true} options={[{ value: '1', label: 'option 1' }]} name="hi" label="" id="1" />
							</div>
							<div className="w-1/3">
								<AppSelect options={['opt 1', 'opt 2']} name="opt" label="opts string" id="3" />
							</div>
							<div className="w-2/3">
								<AppSelect options={['opt 1', 'opt 2']} name="mul1" label="Multiple" isMulti helperText="d" id="2" />
							</div>
							<div className="w-full">
								<AppSelect options={['opt 1', 'opt 2']} name="mul" helperText="d" id="4" />
							</div>
						</InfoCard>
						<InfoCard title="IMG">
							<div className="w-40 h-60" style={{ border: '1px solid' }}>
								<AppImage src={AoModel} alt="ui/ux review check" />
							</div>
							<div className="w-60 h-60" style={{ border: '1px solid' }}>
								<img src={'/imgs/ao-model.png'} alt="ui/ux review check" />
							</div>
							<div className="w-60 h-60" style={{ border: '1px solid' }}>
								<Image src={AoModel} alt="Mô tả ảnh" />
							</div>
						</InfoCard>
					</div>
				</div>
			</form>
		</FormProvider>
	);
}

export default Sample;
