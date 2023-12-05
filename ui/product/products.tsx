import { ProductItem } from './product-item';

export const Products = (products: Products) => {
	return (
		<div className="flex">
			{Array(3)
				.fill('')
				.map((item, index) => {
					return (
						<div className="w-1/3 px-6" key={index}>
							<ProductItem key={index} />
						</div>
					);
				})}
		</div>
	);
};
