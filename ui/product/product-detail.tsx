'use client';

import { useState } from 'react';

import { useRouter } from '@/navigation';
import AoModel from '@/public/imgs/ao-model.png';
import { Button } from '@material-tailwind/react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

import AppImage from '../common/image';

interface Props {
	productId?: string | number;
}
export const ProductDetail = (props: Props) => {
	const { productId } = props;
	const router = useRouter();
	const [isLiked, setIsLiked] = useState(false);
	const [selectedSize, setSelectedSize] = useState('');

	const sizes = ['36', '37', '38', '39'];

	const handleSizeSelect = (size: string) => {
		setSelectedSize(size);
	};

	// size modal
	const [openSizeModal, setOpenSizeModal] = useState(false);

	// amount
	const [amount, setAmount] = useState(1);

	return (
		<div className="flex gap-x-10 gap-y-5 m-auto max-w-[65%] py-5 flex-wrap">
			<div className="w-2/5 flex justify-center flex-wrap">
				{/* <div className="w-full flex justify-between pt-3 px-2.5 pb-0 absolute inset-0 z-10">
					<span className="w-fit whitespace-nowrap select-none bg-gray-900/10 text-gray-900 text-xs rounded-lg flex items-center justify-center h-6 px-2">
						da ban 13c
					</span>
					<span className="w-fit whitespace-nowrap select-none bg-red-600/90 text-white text-xs rounded-lg flex items-center justify-center h-5 px-2 font-bold">
						new
					</span>
				</div> */}
				<AppImage src={AoModel} alt="ao mau" className="w-[420px] border rounded-xl flex items-center flex-1" />
				<div className="w-full mt-8">
					<span className="w-fit whitespace-nowrap select-none bg-gray-900/10 text-gray-900 text-xs rounded-lg flex items-center justify-center h-6 px-2">
						da ban 13c
					</span>
				</div>
			</div>
			<div className="flex-1">
				{/* title */}
				<div className="flex justify-between">
					<span className="font-bold text-base uppercase ">Áo Phao Nam 3s Plus</span>
					<span className="w-fit whitespace-nowrap select-none bg-red-600/90 text-white text-xs rounded-lg flex items-center justify-center h-5 px-2 font-bold">
						new
					</span>
				</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2"></div>
				{/* price */}
				<div className="flex justify-between">
					<span className="font-bold text-base uppercase ">Giá</span>
				</div>
				<div className="font-bold text-base">300.000 đ</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2"></div>
				{/* Ads */}
				<div className="font-bold text-base text-center my-2 pt-2">Đây là đoạn text quảng cáo sản phẩm</div>
				<div className="flex justify-between">
					<div>trang trí</div>
					<div className="text-blue-800 cursor-pointer">Sp-{productId}</div>
				</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2"></div>
				{/* color option*/}
				<div className="font-bold text-base uppercase">Màu</div>
				<div className="group ml-[-3px] mt-2 inline-flex flex-wrap items-center gap-3">
					<AppImage
						src={AoModel}
						alt="ui/ux review check"
						className="w-8 border rounded-full border-gray-900/60 cursor-pointer"
					/>
					<AppImage
						src={AoModel}
						alt="ui/ux review check"
						className="w-8 border rounded-full border-gray-900/60 cursor-pointer"
					/>
					<AppImage
						src={AoModel}
						alt="ui/ux review check"
						className="w-8 border rounded-full border-gray-900/60 cursor-pointer"
					/>
				</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2"></div>
				{/* size options */}
				<div className="font-bold text-base uppercase">Size</div>
				<div className="mt-3 flex justify-between items-center">
					<div>
						{sizes.map((size) => (
							<Button
								key={size}
								className={`mr-3 py-2 px-3 rounded ${
									selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
								}`}
								onClick={() => handleSizeSelect(size)}
								size="sm"
							>
								{size}
							</Button>
						))}
					</div>
					<div
						className="text-sm text-blue-600 underline cursor-pointer"
						onClick={() => {
							setOpenSizeModal(true);
						}}
					>
						hướng dẫn chọn kích thước
					</div>
				</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2 mt-4"></div>
				{/* amount */}
				<div className="font-bold text-base uppercase">Số lượng</div>
				<div className="flex gap-4 items-center mt-3">
					<Button
						className={'rounded-md w-7 flex-col items-center inline-flex justify-center'}
						size="sm"
						variant="outlined"
						onClick={() => {
							amount > 1 && setAmount(amount - 1);
						}}
					>
						<FaMinus />
					</Button>
					<span>{amount}</span>
					<Button
						className={'rounded-md w-7 flex-col items-center inline-flex justify-center'}
						size="sm"
						variant="outlined"
						onClick={() => setAmount(amount + 1)}
					>
						<FaPlus />
					</Button>
				</div>
				<div className="bg-gray-500/60 h-[1px] shadow-lg my-2 mt-4"></div>
				{/* buy */}
				<div className="font-bold text-base uppercase">Mua</div>
				<div className="flex gap-5 mt-2">
					<Button color="light-green"> Mua ngay</Button>
					<Button color="light-blue">Thêm vào giỏ hàng</Button>
				</div>
			</div>
			<div className="w-2/5 flex justify-center"></div>
			<div className="flex-1 mt-3 text-sm text-gray-600">
				Áo này được trang trí bằng hình ảnh chân dung của Châu Tinh Trì, diễn viên hài kịch nổi tiếng Hong Kong. Màu sắc
				của áo tương phản, làm cho hình ảnh nổi bật, thể hiện sự ngưỡng mộ dành cho ông.
			</div>
		</div>
	);
};
