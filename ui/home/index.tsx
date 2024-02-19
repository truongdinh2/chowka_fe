import { useRef, useState } from 'react';

import { cn } from '@/utils/tail-merge';

import { AppButton } from '../common/button';
import { FilterBar } from '../product/filter-bar';
import { FilterBtn } from '../product/filter-btn';
import { Products } from '../product/products';
import { Introduce } from './introduce';

export const Home = () => {
	const [isShowFilterBar, setIsShowFilterBar] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	return (
		<div>
			<div className="py-7 px-8">
				<Introduce />
			</div>
			<div className="flex">
				<div className={cn('duration-100 ease-in-out ')}>
					<div className={`h-button`}></div>
					<FilterBar isShowFilterBar={isShowFilterBar} />
				</div>
				<div className="m-auto  max-w-[70%]">
					<div className="px-6 flex justify-between">
						<div>
							<AppButton onClick={() => setIsShowFilterBar(!isShowFilterBar)} ref={buttonRef}>
								Filter Bar
							</AppButton>
						</div>
						<div>
							<FilterBtn />
						</div>
					</div>
					<div>
						<Products productList={Array(15).fill("")}/>
					</div>
				</div>
			</div>
		</div>
	);
};
