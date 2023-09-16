'use client';

import { useAppDispatch, useAppSelector } from '@/hooks/storeH';
import { increment } from '@/state/store/counterSlice';
import { Button } from '@/ui/common/button';

import { DatePickerProvider } from '../context/datepicker-provider';
import { useLoading } from '../context/loading-provider';
import InfoCard from './info-card';

function Sample() {
	const counter = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();
	const { setLoading } = useLoading();
	return (
		<div className="h-screen flex p-3">
			<div className="flex-1">
				<InfoCard title="Button">
					<div className="flex gap-x-1">
						<Button variant={'default'} size={'lg'}>
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
			</div>
			<div className="flex-1 flex ">
				<h1 className="text-white text-2xl">Phần bên phải</h1>
				<div></div>
			</div>
		</div>
	);
}

export default Sample;
