import { ProductDetail } from '@/ui/product/product-detail';

export default function Page({ params }: { params: { productId: string }} ) {
  const {productId } = params;
	return (
		<div className='w-full'>
			<ProductDetail productId={productId} />
		</div>
	);
}
