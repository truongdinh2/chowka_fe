import { useRouter } from 'next/navigation';

import { useState } from 'react';

import AoModel from '@/public/imgs/ao-model.png';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Chip,
	IconButton,
	Rating,
	Tooltip,
	Typography,
} from '@material-tailwind/react';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa6';
import { RiHeart3Line } from 'react-icons/ri';

import AppImage from '../common/image';

export const ProductItem = (productItem: ProductItem) => {
	const router = useRouter();
	const [isLiked, setIsLiked] = useState(false);
	return (
		<Card
			className="w-full max-w-[19rem] shadow-lg"
			onClick={() => {
				router.push('products/1');
			}}
		>
			{false && (
				<>
					<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gray-700 opacity-60 from-transparent via-transparent to-black/60 z-40 rounded-sm" />
					<Button className="bg-black/50 absolute font-normal z-50" size="sm" disabled>
						Da ban het
					</Button>
				</>
			)}
			<CardHeader floated={false} className="mt-2">
				<div className="w-full flex justify-between pt-4 px-2.5 pb-0">
					<span className="w-fit whitespace-nowrap select-none bg-gray-900/10 text-gray-900 text-xs rounded-lg flex items-center justify-center h-6 px-2">
						da ban 13c
					</span>
					<span className="w-fit whitespace-nowrap select-none bg-red-600/90 text-white text-xs rounded-lg flex items-center justify-center h-5 px-2 font-bold">
						new
					</span>
				</div>
				<AppImage src={AoModel} alt="ui/ux review check" className="h-60" />
			</CardHeader>
			<CardBody className="pb-3 pt-4">
				<div className="mb-1 flex items-center justify-between">
					<Typography variant="h5" color="blue-gray" className="font-bold capitalize">
						Áo đê tiện
					</Typography>
				</div>
				<div className="flex items-center justify-between mb-[0.2rem]">
					<div className="text-blue-gray-900 line-through">350.000đ</div>
					<div className="text-red-700">giảm 50.000đ</div>
				</div>
				<Tooltip
					content="Những lời lẽ đê tiện như vậy cũng nói ra được hay sao. Những lời lẽ đê tiện như vậy cũng nói ra được hay
							sao. Những lời lẽ đê tiện như vậy cũng nói ra được hay sao."
					className="max-w-[18rem]"
				>
					<p className="line-clamp-3 text-[13px]">
						Những lời lẽ đê tiện như vậy cũng nói ra được hay sao. Những lời lẽ đê tiện như vậy cũng nói ra được hay
						sao. Những lời lẽ đê tiện như vậy cũng nói ra được hay sao.
					</p>
				</Tooltip>
				<div className="flex justify-between items-center">
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
					{false && (
						<div>
							<Button
								size="sm"
								variant="gradient"
								color="light-blue"
								className="group relative flex items-center gap-1 overflow-hidden w-12 justify-center"
								onClick={() => {
									setIsLiked((prev) => !prev);
								}}
							>
								<span>3</span>
								{isLiked ? (
									<span className="text-sm text-red-700 block">
										<BsFillHeartFill />
									</span>
								) : (
									<span className="text-base">
										<RiHeart3Line />
									</span>
								)}
							</Button>
						</div>
					)}
				</div>
				<div className="flex items-center gap-1 mt-1">
					<span className="w-6 h-max text-gray-600 text-sm">
						<FaUserSecret />
					</span>
					<Typography className="text-gray-700/50 text-sm capitalize">nguyen dinh truong</Typography>
					{/* <IconButton color="white" title="tác giả" className="w-max h-max" onClick={() => {}}>
					</IconButton> */}
				</div>
			</CardBody>
			{/* <CardFooter className="pt-3 pb-2">
				<Rating value={4} readonly className='text-sm ml-[-3px]'/>
			</CardFooter> */}
		</Card>
	);
};
