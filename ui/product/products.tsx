import { useState } from 'react';

import { Button } from '@material-tailwind/react';
import { IoCaretDownOutline } from 'react-icons/io5';

import { ProductItem } from './product-item';

export const Products = (props: Products) => {
	const { productList } = props;
const [hasLoadMore, setHasLoadMore] = useState<boolean>(productList.length < 10);
	return (
		<div className="flex flex-wrap justify-center">
			{productList.map((item, index) => {
				return (
					<div className="w-1/3 px-6 py-3" key={index}>
						<ProductItem key={index} />
					</div>
				);
			})}
			{hasLoadMore && (
				<Button color="pink" className="flex flex-col items-center" size="sm" onClick={() => setHasLoadMore(false)}>
					Xem thêm
					<IoCaretDownOutline />
				</Button>
			)}
		</div>
	);
};
