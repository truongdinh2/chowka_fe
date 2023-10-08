'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/storeH';
import logger from '@/lib/logger';
import { increment } from '@/state/store/counterSlice';
import { Button } from '@/ui/common/button';
import { FormProvider, useForm } from 'react-hook-form';

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
						<InfoCard title="Button">
							<div className="flex gap-x-1">
								<Button variant={'default'} size={'lg'} type="submit">
									default
								</Button>
								<Button variant={'destructive'} size={'lg'}>
									destructive
								</Button>
								<Button variant={'secondary'} size={'lg'}>
									secondary
								</Button>
								<Button variant={'warning'} size={'lg'}>
									warning
								</Button>
								<Button variant={'link'} size={'lg'}>
									link
								</Button>
								<Button variant={'success'}>success</Button>
							</div>
						</InfoCard>
						<InfoCard title="Redux-toolkit">
							<div className="flex gap-x-2">
								<Button variant={'default'} onClick={() => dispatch(increment())}>
									increment
								</Button>
								<div>{counter}</div>
								<Button
									variant={'secondary'}
									onClick={() => {
										setLoading(true);
									}}
								>
									setLoadingT
								</Button>
								<Button
									variant={'secondary'}
									onClick={() => {
										setLoading(false);
									}}
								>
									setLoadingF
								</Button>
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
					</div>
				</div>
			</form>
		</FormProvider>
	);
}

export default Sample;
