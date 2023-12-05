import { useRef, useState } from 'react';

import { cn } from '@/utils/tail-merge';

import { AppButton } from '../common/button';
import { FilterBar } from '../product/filter-bar';
import { Products } from '../product/products';
import { Introduce } from './introduce';
import { FilterBtn } from '../product/filter-btn';

export const Home = () => {
	const [isShowFilterBar, setIsShowFilterBar] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	return (
		<div>
			<div className='py-7 px-8'>
				<Introduce />
			</div>
			<div className="flex">
				<div className={cn('duration-100 ease-in-out ')}>
					<div className={`h-button`}></div>
					<FilterBar isShowFilterBar={isShowFilterBar} />
				</div>
				<div className='m-auto'>
					<div className="ml-3 flex justify-between">
						<div>
						<AppButton onClick={() => setIsShowFilterBar(!isShowFilterBar)} ref={buttonRef}>
							Filter Bar
						</AppButton>
						</div>
						<div className='px-3'>
						<FilterBtn/>
						</div>
					</div>
					<div>
						<Products />
					</div>
				</div>
			</div>
		</div>
	);
};
